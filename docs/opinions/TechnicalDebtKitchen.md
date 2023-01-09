---
title: The Technical Debt explained with a kitchen analogy
description: Wow, so effiency, very good practices
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

# The Technical Debt explained with a kitchen analogy.

I'm often confronted to the challenge of explaining to a non-tech person what the "Technical Debt" is. Or maybe I have to explain the difference between Good code VS Bad code, or between a good codebase VS a bad codebase.

More importantly, I often need people to *feel* what it's like to work with or without Technical Debt. How can a tech person convey the *feelings* of a work environment full of Technical Debt to someone who never coded in their life?

The best metaphor I could find is the kitchen.

## The Technical Debt explained for tech people:

The Technical Debt is what happens when you try to take shortcuts in the development or maintenance of your application :

- You developed a new feature but the code is hacky, slightly disgusting, and you won't factorize it and polish it? That's technical debt.
- You're not taking the time to test your application? This adds to your technical debt.
- No time to update to the last version of your framework? More technical debt.

TD can come from pure laziness, or from a lack of technical skill, but that's extremely rare. The overwhelming majority of cases is a lack of time.

## The Technical Debt is Very Bad©

Every developer worth their salt knows it: while small amounts of TD are not a big issue, and can even be desirable in some cases (i.e. you have a deadline you can't miss) in the long run an out-of-control Technical Debt will be a terrible burden for your whole company:

- It drastically slows your development speed in the middle / long term.
- It works as a feedback loop: the more TD you currently have, the more you will generate.
- It will make your engineers hate the work. More on that later.
- It can, in the end, literally destroy your company.

## What it's like to work with Technical Debt: the Kitchen Analogy.

Imagine that you're a professional cook. A very good one, actually: after years and years of hard studies, you developed skills that are sought-after in the best 3-stars restaurants.

You just got hired in a new, promising restaurant: "The Unicorn". The pay is good. The team is great. You're psyched up for your first day.

Then on your first morning, you enter the kitchen and this is what you see:

![Very dirty kitchen](/images/kitchen_dirty.jpg)

Your first thought, obviously, is "What a f**** mess. This needs to be cleaned immediately and urgently". But the manager tells you there is no time, customers are arriving right now, so you'd better start cooking this instant.

**Do you think you'll have a good, enjoyable first day of work?**

Now realize this is what you'll be dealing with, 5 days a week, 4 weeks a month, for many years of your precious life.

Working in a dirty kitchen is extremely depressing. It will make everything you do a terrible chore. Even the simplest plate will be hard to prepare. You're going to serve shit, sometimes literal shit, to your customers. There will be bugs crawling everywhere, and every time you squash one, two more will appear. You will lose more time removing squashed bug parts from the customer's plates than you would spend cleaning or, you know, actually cooking good food.

Now imagine instead that this is what you saw when you arrived:

![Very clean kitchen](/images/kitchen_clean.jpg)

Clean. Polished. Everything well organized, easy to access. Just beautiful.

Will it be the same work experience?

There's a reason for the popular saying: *"Technical Debt is debt you repay with your soul"*.

## Why do we allow Technical Debt to exist?

There's a lot of reasons for a TD to grow out of control. None of them are good.

### Young start-up on takeoff

The only maybe-somehow-acceptable situation where a TD can grow significantly would be at the very early stages in a start-up creation. You need to conquer market shares fast, so you need to develop fast.

Here's where the issues starts to appear, though. Because TD generates more TD, the start-up which doesn't take care of its TD early will then carry it for years and years, until it turns into a black hole destroying your company efficiency and slurping your developers wellbeing.

### Bad management

Non-tech managers, sadly, do not understand what the TD is, and as I mentioned earlier, it is extremely difficult to explain to them the extent of the issue.

They will only see what is actually produced by the dev team, i.e. which features are getting out. They don't realize most of the work that happens under the hood.

If they end up measuring your productivity in features (or worse, in amount of code produced) without any regard for the Technical Debt, then **programmers are actually incentivized to sabotage the codebase.**

Bill gates said "Measuring programming progress by lines of code is like measuring aircraft building progress by weight.". A great analogy, since heavy aircrafts are harder to fly & more fuel-consuming.

### Never worked in the clean

Programming schools often don't spend enough time on the necessity of a clean codebase. They usually just ask you to code small or medium-sized projects with a given list of features.

Therefore, a junior developer just out of school won't realize the importance of a clean work environment.

Now, if the junior joins a team of professionals who uphold themselves to high standards, he will realize *how much better* cooking in a clean kitchen is.

But usually, they will join a company with subpar coding practices. This will reinforce in them the idea that this is what coding is. Coding is hard, and annoying, and there's shit everywhere, that's just how the work is, and nothing can be done about it.

It is normal for a kitchen to look disgusting. That's how kitchens are.

## Conclusion

I often hear stories of junior developers, "realizing the work is not for them" and wanting to quit the industry.

They feel stressed, burned-out, everything seems just so damn complex all the damn time. They're exhausted. They don't think they can keep doing the same work for 40 more years.

Every time I ask them about their work conditions, it becomes clear they've been working in the dirtiest kitchen.

We are literally losing developers under the dirty dishes.

It needs to stop. The Technical Debt culture is [one of the major reasons why our work culture suck](./WhyOurWorkCultureSucks.md).

And it really doesn't have to. Just clean your damn kitchen.
