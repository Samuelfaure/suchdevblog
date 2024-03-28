import{_ as a,M as s,p as l,q as o,R as e,t as i,N as n,a1 as r}from"./framework-96b046e1.js";const d="/images/xkcd_git.webp",c={},u={href:"https://dev.to/samuelfaure/how-to-learn-git-slowly-38fa",target:"_blank",rel:"noopener noreferrer"},m=e("h1",{id:"how-to-learn-git-slowly",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#how-to-learn-git-slowly","aria-hidden":"true"},"#"),i(" How to Learn Git Slowly")],-1),v=e("p",null,[e("em",null,"This post is dedicated to my wife who, despite being one of the smartest person I know, still sucks at Git.")],-1),h=e("p",null,"I've been mentoring webdev students for a while now. So I'm in prime position to see what mistakes are common amongst beginners.",-1),p=e("p",null,[i("I wrote a previous article about "),e("a",{href:"./HowToStartCss"},"how to start learning CSS"),i(" - a great read for any CSS beginner.")],-1),b=e("p",null,"Now it's time to master Git. Git is... not easy to master.",-1),g=e("p",null,[e("img",{src:d,alt:"Xkcd comic about Git"})],-1),f={href:"https://xkcd.com/",target:"_blank",rel:"noopener noreferrer"},w=r(`<p>Which is why beginners can get confused easily. And a mistake can cost a lot: no one wants to be that guy who deleted their peer&#39;s work.</p><p>The best way to learn Git is gradually. It can take quite some time before you&#39;re a real Git master.</p><p>This guide intend to make your journey easier by organizing your learning path in simple, digestible clear-cut steps. Be sure to master each level very well before switching to the next!</p><h2 id="i-basic-solo-use" tabindex="-1"><a class="header-anchor" href="#i-basic-solo-use" aria-hidden="true">#</a> I - Basic solo use</h2><p>These tools will allow you to use Git for your own usage. Don&#39;t bother with branches for now, just do everything on Main.</p><p><em>Concepts to understand perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- What is the difference between Git and Github?
- What is a commit?
- What is the staging phase?
- What is a branch?
- What&#39;s the remote repository VS local repository?
- How to set one or more upstream repository?
- How to commit?
- How to push / pull to an upstream repository?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Commands to know perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git init
git clone &lt;repository&gt;
git status
git add &lt;file&gt;
git add --all
git commit
git remote add
git remote set-url
git remote -v
git push &lt;repository&gt; &lt;branch&gt;
git pull &lt;repository&gt; &lt;branch&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ii-basic-tools" tabindex="-1"><a class="header-anchor" href="#ii-basic-tools" aria-hidden="true">#</a> II - Basic tools</h2><p>These tools will allow you to be more at ease with Git as a working tool. We will also need to learn a little bit of configuration.</p><p><em>Concepts to understand perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- The .gitignore file
- The .gitconfig file
- Seeing the commit log
- File manipulation with Reset, Clean, Checkout &lt;file&gt;, Rm
- Repo manipulation with the Stash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Commands to know perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git log (with and without --stat)
git checkout &lt;file&gt;
git reset &lt;file&gt; (DANGEROUS!)
git reset --hard (DANGEROUS!)
git clean -f (DANGEROUS!)
git rm &lt;file&gt; (DANGEROUS!)
git config --global user.name
git config --global user.email
git stash
git stash apply
git stash clear (Kinda dangerous)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iii-basic-collaboration" tabindex="-1"><a class="header-anchor" href="#iii-basic-collaboration" aria-hidden="true">#</a> III - Basic collaboration</h2><p>This will allow you to start collaborating with other people. You need to master this level BEFORE any attempt at collaboration.</p><p><em>Concepts to understand perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- Branchs: What they are, why they exist, how to use them.
- Merging
- Conventions for branch naming
- How to write good commit messages
- What are forked repositories?
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Commands to know perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git merge
git branch
git checkout &lt;branch&gt;
git checkout -b
git blame &lt;file&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="iv-basic-collaboration-rebase-pull-requests" tabindex="-1"><a class="header-anchor" href="#iv-basic-collaboration-rebase-pull-requests" aria-hidden="true">#</a> IV - Basic collaboration: Rebase &amp; Pull requests</h2><p>I put the whole &quot;rebasing to the collaborative branch&quot; apart, because it adds the first command that can damage your remote repository: <code>git push --force-with-lease</code>.</p><p>Indeed, if you&#39;re rebasing your local branch, you will need to push with this option to your distant repository. So it&#39;s dangerous, but you still need to master this part if you collaborate in a team.</p><p>I also add pull requests here, because they&#39;re an important concept but they are more of a Github/Gitlab concept than really a Git concept.</p><p><em>Concepts to understand perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- Simple rebase (and how it differs from merging)
- What are pull requests?
- How to make a PR from branch to branch
- How to make a PR from a fork to the original repository
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Commands to know perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git rebase
git push --force-with-lease (DANGEROUS)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="v-competent-level" tabindex="-1"><a class="header-anchor" href="#v-competent-level" aria-hidden="true">#</a> V - Competent level</h2><p>This level allows you to better organize your work history, organize your branches, and navigate in your history with ease.</p><p><em>Concepts to understand perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- How to rewrite your local history
- How to rebase interactively
- Branch management (prune, fetch)
- Use of HEAD notation or commit hashes
- Using Diff to compare commits
- How to revert a commit
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Commands to know perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git commit --amend
git rebase -i
git prune
git fetch
git remote prune
git checkout HEAD/HEAD~1/&lt;commit hash&gt;
git diff &lt;commit hash 1&gt; &lt;commit hash 2&gt;
git revert &lt;commit hash&gt;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="vi-advanced-level" tabindex="-1"><a class="header-anchor" href="#vi-advanced-level" aria-hidden="true">#</a> VI - Advanced level</h2><p>At this level, you can fix when you or someone else fuck something up.</p><p><em>Concepts to understand perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>- What is the reflog?
- How to clean sensitive data from the repository
- How to effectively hunt for bad commits
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>Commands to know perfectly:</em></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>git reflog
git-filter-branch
git-filter-repo
git bisect
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,41),y={href:"https://rtyley.github.io/bfg-repo-cleaner/",target:"_blank",rel:"noopener noreferrer"},x=e("h2",{id:"conclusion",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#conclusion","aria-hidden":"true"},"#"),i(" Conclusion")],-1),_=e("p",null,"I hope this guide helped you navigate the treacherous route that is learning Git for the first time.",-1),k=e("p",null,"If I forgot an important command you're using regularly, be sure to tell me!",-1),C=e("p",null,"Happy coding!",-1);function G(I,H){const t=s("ExternalLinkIcon");return l(),o("div",null,[e("p",null,[i("This article was first published on "),e("a",u,[i("Dev.to"),n(t)]),i(". Thanks to the team for choosing it as a Top 7 weekly!")]),m,v,h,p,b,g,e("p",null,[e("a",f,[i("Comic from XKCD"),n(t)])]),w,e("p",null,[i("As a great alternative to the git-filter commands, I advise "),e("a",y,[i("BFG"),n(t)]),i(".")]),x,_,k,C])}const T=a(c,[["render",G],["__file","HowToLearnGit.html.vue"]]);export{T as default};
