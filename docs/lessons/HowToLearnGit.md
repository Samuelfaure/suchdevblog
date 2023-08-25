---
title: How to Learn Git Slowly
description: Much Git, wow, very Github.
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

This article was first published on [Dev.to](https://dev.to/samuelfaure/how-to-learn-git-slowly-38fa). Thanks to the team for choosing it as a Top 7 weekly!

# How to Learn Git Slowly

*This post is dedicated to my wife who, despite being one of the smartest person I know, still sucks at Git.*

I've been mentoring webdev students for a while now. So I'm in prime position to see what mistakes are common amongst beginners.

I wrote a previous article about [how to start learning CSS](./HowToStartCss) - a great read for any CSS beginner.

Now it's time to master Git. Git is... not easy to master.

![Xkcd comic about Git](/images/xkcd_git.webp)

[Comic from XKCD](https://xkcd.com/)

Which is why beginners can get confused easily. And a mistake can cost a lot: no one wants to be that guy who deleted their peer's work.

The best way to learn Git is gradually. It can take quite some time before you're a real Git master.

This guide intend to make your journey easier by organizing your learning path in simple, digestible clear-cut steps. Be sure to master each level very well before switching to the next!

## I - Basic solo use

These tools will allow you to use Git for your own usage. Don't bother with branches for now, just do everything on Main.

*Concepts to understand perfectly:*
```
- What is the difference between Git and Github?
- What is a commit?
- What is the staging phase?
- What is a branch?
- What's the remote repository VS local repository?
- How to set one or more upstream repository?
- How to commit?
- How to push / pull to an upstream repository?
```

*Commands to know perfectly:*
```
git init
git clone <repository>
git status
git add <file>
git add --all
git commit
git remote add
git remote set-url
git remote -v
git push <repository> <branch>
git pull <repository> <branch>
```

## II - Basic tools

These tools will allow you to be more at ease with Git as a working tool. We will also need to learn a little bit of configuration.

*Concepts to understand perfectly:*
```
- The .gitignore file
- The .gitconfig file
- Seeing the commit log
- File manipulation with Reset, Clean, Checkout <file>, Rm
- Repo manipulation with the Stash
```

*Commands to know perfectly:*
```
git log (with and without --stat)
git checkout <file>
git reset <file> (DANGEROUS!)
git reset --hard (DANGEROUS!)
git clean -f (DANGEROUS!)
git rm <file> (DANGEROUS!)
git config --global user.name
git config --global user.email
git stash
git stash apply
git stash clear (Kinda dangerous)
```

## III - Basic collaboration

This will allow you to start collaborating with other people. You need to master this level BEFORE any attempt at collaboration.

*Concepts to understand perfectly:*
```
- Branchs: What they are, why they exist, how to use them.
- Merging
- Conventions for branch naming
- How to write good commit messages
- What are forked repositories?
```

*Commands to know perfectly:*
```
git merge
git branch
git checkout <branch>
git checkout -b
git blame <file>
```

## IV - Basic collaboration: Rebase & Pull requests

I put the whole "rebasing to the collaborative branch" apart, because it adds the first command that can damage your remote repository: `git push --force-with-lease`.

Indeed, if you're rebasing your local branch, you will need to push with this option to your distant repository. So it's dangerous, but you still need to master this part if you collaborate in a team.

I also add pull requests here, because they're an important concept but they are more of a Github/Gitlab concept than really a Git concept.

*Concepts to understand perfectly:*
```
- Simple rebase (and how it differs from merging)
- What are pull requests?
- How to make a PR from branch to branch
- How to make a PR from a fork to the original repository
```

*Commands to know perfectly:*
```
git rebase
git push --force-with-lease (DANGEROUS)
```

## V - Competent level

This level allows you to better organize your work history, organize your branches, and navigate in your history with ease.

*Concepts to understand perfectly:*
```
- How to rewrite your local history
- How to rebase interactively
- Branch management (prune, fetch)
- Use of HEAD notation or commit hashes
- Using Diff to compare commits
- How to revert a commit
```

*Commands to know perfectly:*
```
git commit --amend
git rebase -i
git prune
git fetch
git remote prune
git checkout HEAD/HEAD~1/<commit hash>
git diff <commit hash 1> <commit hash 2>
git revert <commit hash>
```

## VI - Advanced level

At this level, you can fix when you or someone else fuck something up.

*Concepts to understand perfectly:*
```
- What is the reflog?
- How to clean sensitive data from the repository
- How to effectively hunt for bad commits
```

*Commands to know perfectly:*
```
git reflog
git-filter-branch
git-filter-repo
git bisect
```

As a great alternative to the git-filter commands, I advise [BFG](https://rtyley.github.io/bfg-repo-cleaner/).

## Conclusion

I hope this guide helped you navigate the treacherous route that is learning Git for the first time.

If I forgot an important command you're using regularly, be sure to tell me!

Happy coding!
