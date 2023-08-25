---
title: The Marie Kondo guide for the Clean Developer
description: Wow, so clean, very productive
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

# The Marie Kondo guide for the Clean Developer

Marie Kondo is that Japanese woman who became famous with her method for reaching a tidy home and a tidy life.

![An image showing Marie Kondo](/images/marie_kondo.webp)

Her method can be summed up as:

_**Throw away most of your shit.**_

You don't really need it. It's holding you back. It adds to your mental load, it bloats your life and living space.
Everything that doesn't make you happy (or is very useful) must be thrown away.

It's hard to describe how liberating it feels to just *have less*. It's a feeling very few people will ever actually experience.

But as humans, we are anxious creatures afraid of scarcity. So the act of throwing stuff away can be very difficult.

Why is it so hard, and why is it also so important? Let's discuss.

## Is it really that important?

Yes. But you can't really know this if you never experimented both sides: the clean and the dirty. As I explain in [this article about the technical debt](/opinions/TechnicalDebtKitchen), most developers never worked in the clean and don't understand just how huge the difference *feels*.

Just as throwing your shit away is important for living in a clean space, throwing your code away is important for working on a clean, debt-free codebase.

## Removing a line of code is much harder than adding one.

Blase Pascal ([not Mark Twain](https://quoteinvestigator.com/2012/04/28/shorter-letter/)) wrote :

**If I had more time, I would have written a shorter letter.**

The best code is short, DRY and simple. The least good code is long, repetitive and complex.

Adding code is easy. You have a need, you just throw code at it until the problem disappears. But more code means more maintenance, more bugs, more complexity, more problems.

Removing code is hard. You need to either accept that your need won't be fulfilled, or you have to write the best, shortest, most elegant code to fulfill that need.

**No code means no problems.**

## You're not really throwing anything away.

Are you using Git? If not, stop reading this and go implement Git.

If you're using Git correctly, then you have a trace of every line of code ever written in your database.

Many developers will complain that it is hard to find deleted code because their Git history is a mess. When we dig to find out why they can't keep a clean commit history, we soon realize it's because their codebase is a mess.

Don't be a victim of tautology. [A messy kitchen only attracts more mess](/opinions/TechnicalDebtKitchen). Break the cycle and be free.

## Marketing VS Technical

The marketing like new features, and for good reasons. New features are *good*. They supposedly attract new clients, and new clients are *good*. More clients means more money, and money is *good*.

Experimenting and changing to see what works and what doesn't is a great way to develop your product and achieve success. But adding a feature is like buying an air-fryer: there is a risk that you actually won't be using it.

So adding stuff is great, but you have to follow rules:

- Dont add crap to your app. Add clean, well-coded, well-polished _small_ features. Go for a good little MVP (Minimum Viable Product), don't go for the huge, badly-hacked feature.

- You can't keep adding stuff if you don't remove stuff. If a feature is not used by a majority of your users, you probably want to just _throw it away_.

## Conclusion

This article was originally about 1000 words, but since I had some time, I made it under 600.

Throw your shit away, today.

