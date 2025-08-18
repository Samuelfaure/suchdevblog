#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const RESOURCES_DIR = path.join(__dirname, '../docs/resources');
const TIMEOUT_MS = 10000;
const USER_AGENT = 'Mozilla/5.0 (compatible; LinkChecker/1.0)';

class LinkValidator {
  constructor() {
    this.validLinks = [];
    this.invalidLinks = [];
    this.removedLinks = [];
  }

  async validateUrl(url) {
    return new Promise((resolve) => {
      try {
        const urlObj = new URL(url);
        const protocol = urlObj.protocol === 'https:' ? https : http;
        
        const options = {
          hostname: urlObj.hostname,
          port: urlObj.port,
          path: urlObj.pathname + urlObj.search,
          method: 'HEAD',
          headers: {
            'User-Agent': USER_AGENT,
            'Accept': '*/*'
          },
          timeout: TIMEOUT_MS
        };

        const req = protocol.request(options, (res) => {
          const statusCode = res.statusCode;
          if (statusCode >= 200 && statusCode < 400) {
            resolve({ valid: true, status: statusCode });
          } else if (statusCode >= 300 && statusCode < 400 && res.headers.location) {
            // Follow redirects manually for HEAD requests
            this.validateUrl(res.headers.location).then(resolve);
          } else {
            resolve({ valid: false, status: statusCode, error: `HTTP ${statusCode}` });
          }
        });

        req.on('error', (error) => {
          resolve({ valid: false, error: error.message });
        });

        req.on('timeout', () => {
          req.destroy();
          resolve({ valid: false, error: 'Request timeout' });
        });

        req.setTimeout(TIMEOUT_MS);
        req.end();
      } catch (error) {
        resolve({ valid: false, error: error.message });
      }
    });
  }

  extractLinksFromMarkdown(content) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    const links = [];
    let match;

    while ((match = linkRegex.exec(content)) !== null) {
      const text = match[1];
      const url = match[2];
      const fullMatch = match[0];
      
      // Only process external URLs (not internal links)
      if (url.startsWith('http://') || url.startsWith('https://')) {
        links.push({
          text,
          url,
          fullMatch,
          index: match.index
        });
      }
    }
    return links;
  }

  async processFile(filePath) {
    console.log(`\n📄 Processing: ${path.basename(filePath)}`);
    
    const content = fs.readFileSync(filePath, 'utf8');
    const links = this.extractLinksFromMarkdown(content);
    
    if (links.length === 0) {
      console.log('   No external links found');
      return;
    }

    let modifiedContent = content;
    let hasChanges = false;

    // Process links in reverse order to maintain correct indices when removing
    for (let i = links.length - 1; i >= 0; i--) {
      const link = links[i];
      process.stdout.write(`   🔍 Checking: ${link.url}... `);
      
      const result = await this.validateUrl(link.url);
      
      if (result.valid) {
        console.log(`✅ Valid (${result.status || 'OK'})`);
        this.validLinks.push({ file: filePath, ...link, status: result.status });
      } else {
        console.log(`❌ Invalid (${result.error})`);
        this.invalidLinks.push({ file: filePath, ...link, error: result.error });
        
        // Remove the invalid link from content
        const beforeLink = modifiedContent.substring(0, link.index);
        const afterLink = modifiedContent.substring(link.index + link.fullMatch.length);
        modifiedContent = beforeLink + afterLink;
        hasChanges = true;
        
        this.removedLinks.push({
          file: path.basename(filePath),
          text: link.text,
          url: link.url,
          error: result.error
        });
        
        console.log(`   🗑️  Removed invalid link: "${link.text}"`);
      }
    }

    // Write back the modified content if there were changes
    if (hasChanges) {
      fs.writeFileSync(filePath, modifiedContent, 'utf8');
      console.log(`   💾 File updated with ${this.removedLinks.filter(r => r.file === path.basename(filePath)).length} link(s) removed`);
    }
  }

  async validateAllResources() {
    console.log('🔗 Link Validator for Resources Folder');
    console.log('=====================================\n');

    const files = fs.readdirSync(RESOURCES_DIR)
      .filter(file => file.endsWith('.md'))
      .map(file => path.join(RESOURCES_DIR, file));

    if (files.length === 0) {
      console.log('No markdown files found in resources directory');
      return;
    }

    for (const file of files) {
      await this.processFile(file);
    }

    this.printSummary();
  }

  printSummary() {
    console.log('\n📊 SUMMARY');
    console.log('===========');
    console.log(`✅ Valid links: ${this.validLinks.length}`);
    console.log(`❌ Invalid links: ${this.invalidLinks.length}`);
    console.log(`🗑️  Links removed: ${this.removedLinks.length}`);

    if (this.removedLinks.length > 0) {
      console.log('\n🗑️  REMOVED LINKS:');
      this.removedLinks.forEach(link => {
        console.log(`   ${link.file}: "${link.text}" (${link.url})`);
        console.log(`      Reason: ${link.error}`);
      });
    }

    if (this.invalidLinks.length === 0) {
      console.log('\n🎉 All links are valid!');
    } else {
      console.log('\n⚠️  Invalid links have been removed from the files.');
    }
  }
}

// Run the validator
if (require.main === module) {
  const validator = new LinkValidator();
  validator.validateAllResources().catch(console.error);
}

module.exports = LinkValidator;