# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a VuePress-based personal development blog for Samuel Faure (suchdevblog.com). The blog contains tutorials, lessons, opinions, and resources about web development, particularly focused on Ruby on Rails, Node.js, and fullstack development.

## Common Commands

### Development
- `pnpm docs:dev` - Start the development server (default at http://localhost:8080)
- `pnpm docs:build` - Build the static site for production

### Package Management
- This project uses `pnpm` as the package manager

## Architecture

### Technology Stack
- **VuePress 2.0.0-rc.15** - Static site generator
- **Vue 3.5.6** - Frontend framework
- **Vite bundler** - Build tool
- **SASS** - CSS preprocessor

### Project Structure
- `/docs/` - Main content directory containing all blog posts and pages
  - `/docs/.vuepress/` - VuePress configuration and theme customization
  - `/docs/.vuepress/config.js` - Main configuration file defining site metadata, navigation, and sidebar
  - `/docs/.vuepress/public/` - Static assets (images, favicons, stylesheets)
  - Content organized into categories: lessons/, opinions/, tutorials/, resources/

### Content Organization
- **Resources**: Curated lists for developers at different levels (Beginners, Intermediate, Senior)
- **Lessons**: Educational content about development practices and concepts
- **Opinions**: Opinion pieces on tech culture and practices
- **Tutorials**: Step-by-step technical guides primarily focused on Rails and web development

### Deployment
- Pushing to `main` branch automatically updates the `release` branch
- Site is deployed at https://suchdevblog.com/

### Navigation Structure
- Top navigation defined in `config.js` navbar array
- Sidebar automatically generated from file structure with manual ordering in config
- Analytics tracked via GoatCounter