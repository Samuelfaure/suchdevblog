---
title: ⭐ Dramatically increase your productivity with Atomic Git Commits
description: Very atomic, wow, much Git.
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

# ⭐ Dramatically increase your productivity with Atomic Git Commits

*Atomic: of or forming a single irreducible unit or component in a larger system.*

_This article was first published on [Dev.to](https://dev.to/samuelfaure/how-atomic-git-commits-dramatically-increased-my-productivity-and-will-increase-yours-too-4a84). Thanks to the team for choosing it as a Top 7 weekly!_

## Knowing VS Actually Knowing

I remember when my first mentor told me about Test-Driven Development. A great methodological approach to software engineering. It took me just a few minutes to understand what it was and how it worked.

Then I spent the next six months actively not practicing it. TDD is hard when you start, so you just... don't.

Half a year later, I was hitting my head against a wall trying to build a new feature. I forced myself for the first time to actually do TDD by the book. The wall that was blocking my progress disappeared instantly.

[In a previous article](https://suchdevblog.com/opinions/WhyOurWorkCultureSucks.html), I explained how many managers and tech leads often know exactly how to make our industry better... yet don't. There is always a good reason to not do things right. And somehow we still end up surprised when we're doing things wrong.

This long introduction is here to illustrate a point: you can *know* what you should do, but you might not know how important it is to *actually do it*. So many people out there, just like I did before, know how TDD is great... yet still don't use it.

The simplest concepts can often completely change the way you work... if you would only apply them. Introducing: the atomic git commits.

## What's an atomic git commit?

Working with atomic git commits means your commits are of the smallest possible size. Each commit does one, and only one simple thing, that can be summed up in a simple sentence.

The amount of code change doesn't matter. It can be a letter or it can be a hundred thousand lines, but you should be able to describe the change with one simple short sentence.

Ideally, you also want your test suite to be in the green when you commit. Your changes might be "atomic", i.e the smallest possible, but they should also be "complete", which means your test suite always follow through.

As small as possible, but complete: this is an atomic git commit.

## Why should you write atomic git commits?

There are a few great advantages to practicing atomic git commits, and we'll briefly detail them. But the last one really is the most important. It might completely change the way you approach your work, increase your productivity by an order of magnitude, and make your job much more enjoyable.

### Reason number 1: An atomic change is a reversible change

We all know this simple truth about software: the requirements are *always* changing. By writing atomic git commits, we allow ourselves to revert any changes by a simple commit revert. This already increases your productivity tremendously.

### Reason number 2: A clean git history

When shit hit the fan, a clean git history means the difference between pain and salvation. It's like insuring your house: seems useless, until there's a fire.

### Reason number 3: Pull requests are much easier to review

Your team will absolutely love you for this.

### Reason number 4: A much, much better workflow

This is by far the most important reason to practice atomic git commits: it completely alters the way you approach problem-solving.

If you're like me, you might have a tendency while developing a feature, to just... *do it*. Entirely.

Then you realize how you did not think everything through.

You need to change more that you expected. Some edge cases aren't taken into account. You broke some unrelated tests, they need fixing. Soon, you end up in a maze of your own making. You're lost. Your head hurts. You can't make any progress without being entirely focused.

Now, this is the *wrong* way to do things. And worse, you already know the *right* way, because it's so obvious.

The well-known method to complete a big, complex task: cut it down into smaller, manageable, tiny steps. Each step -its own simple problem to solve. This is obvious advice that you probably already heard many times... But are you actually practicing it in your daily job?

Well, here's a great way to actually practice it: write atomic git commits.

By forcefully working in atomic commits, you're approaching the work the right way, by simplifying it into smaller steps. After all, *simplifying complexity* is the very core of our job. So why aren't we always consciously doing it?

Of course this advice might sound obvious. But if my past experience proves anything, it's that the obvious really bears repeating, and even more importantly, it bears *practicing*.

Make your work simpler, better, more manageable, and most importantly: *make it easier*. Take small steps. Write small commits. Atomic commits. You will love them.

