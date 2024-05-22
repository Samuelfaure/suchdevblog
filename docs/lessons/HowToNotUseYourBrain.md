---
title: 🧠 How to be a great software engineer without using your brain
description: Wow, so dumb, very productivity, much efficiency, wow.
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel-Zacharie Faure
---

# 🧠 How to be a great software engineer without using your brain

_This article was first featured on [Dev.to](https://dev.to/samuelfaure/how-to-be-a-great-software-engineer-without-using-your-brain-1g5k). Thanks to the editorial team for choosing it as a top 7 weekly!_

---

_I choose a lazy person to do a hard job. Because a lazy person will find an easy way to do it._ - Bill Gates

This article is intended to teach you how to do your daily job as a software engineer -and do it _very well_- with the minimal amount of efforts.

While I do believe this will have some interesting information for most readers, it will be an _especially_ great read for people who struggle with ADHD. If you know a programmer or aspiring programmer in this situation, you might help them (and myself) by sharing this article.

Let's start.

## I - Using Your Brain Considered Harmful

### I dislike using my brain.

The reason is, using your brain is _hard_. Most people will avoid doing hard things too often. If you can do a great job without efforts, then why should you? You don't get extra points for difficulty.

Job satisfaction increases when you're not suffering. Your energy levels stays high, your productivity as well.

There is a secret to achieving high efficiency with minimal efforts, it's called "being smart about it". Martial artists achieve high efficiency by applying high pressure onto an opponent's sensitive points. That's knowledge well used.

Let's be smart about it then.

## II - Problem: Software engineering is complicated.

Well, then we just have to make it simple, this way we won't have to think too much.

Turns out, this task is also the best description of the work of a software engineer: _reducing complexity_.

Complexity is bad. [Very, very bad](https://grugbrain.dev/#grug-on-complexity). It is your job to make everything as simple as possible. As we will discuss later, this is the part where you actually need to be smart and use your brain.

We achieve simplicity via both programming practices, and work methodologies. Some examples:

**Programming practices**

Elegant, high-quality code. Following best practices. Using the right OOP patterns at the right time, functional programming when it makes sense. Refactoring. Avoiding [technical debt](/opinions/TechnicalDebtKitchen) and spaghetti code. You get the idea, but this is not what this article is about, we're here for the next section:

**Work methodologies**

Let's explore some work methods that will help you save on all that precious brainpower.

## III - When to think hard, and how to do it.

As you will notice, the methodologies I will detail are not really about _not thinking_. They are about _thinking hard, at the right time_.

I do believe there are merits in the saying: "Sleep only when you're very sleepy, eat only when you're very hungry". I would add: "Think hard only when you really need to think hard".

Knowing when to think hard _and then actually thinking hard_ is key to building great software.

Here are two great work methods to achieve _great thinking_:

**Deep work**:
as explained by Cal Newport in his (amazing) book, it's all about maximizing work efficiency by achieving high focus.

**Pomodoros**:
By cutting your work into small time fractions and combining this with _deep work_, you can actually achieve your best work.

Feel free to research those topics, because I will not detail them here. We're going to focus less on _how_ to use your brain and more on _when_ to use your brain.

## IV - Work methodologies for the dumb and the lazy.

### **[Atomic Git commits](https://dev.to/samuelfaure/how-atomic-git-commits-dramatically-increased-my-productivity-and-will-increase-yours-too-4a84)**

The way you use Git can force you to use your brain more efficiently. I strongly advise you to read the linked article, it explains why quite well.

The gist is: using Atomic Git commits forces you to map in your head the exact suite of commits necessary to achieve your goals, in small steps.

Breaking up a big task into smaller, simpler, easier steps? That's the textbook recipe for reducing complexity!

The difficulty with this method is that you have to pay in mental currency _at the very beginning_. As they say, "A week of coding can save on 30 minutes of planning". Still, because thinking is _hard_, we tend not to do it. That is a mistake, because you will have to pay the interests later.

Once you've cut your task into smaller steps, you can turn off your brain. You won't need that bag of meat anymore.

### BDD, Not TDD.

So I'm definitely not making friends here (hello ThePrimeagen, hope you like this one as well), since this is a very controversial topic. This will digress somewhat, but I think in an interesting way. Disclaimer, this is only my opinion, yadda-yadda.

I strongly believe that Behavior-Driven Development is an amazing tool to use your brain as little as possible while achieving high-quality code.

I use the term "Behavior-Driven Development" to address a common criticism of Test-Driven Development, which is "You don't know what you want at first, so when doing TDD you have to rewrite your tests once you know what you want".

I believe there is a misunderstanding here between opponents and proponents of TDD, and the misunderstanding might stem from confusion between TDD and BDD.

What supporters of TDD/BDD are hearing is: "I don't know the specifications I'm supposed to fulfill". This sounds ridiculous: If you don't know what you're supposed to achieve, you should definitely go have a brain-using session until you clarified your specifications.

What the opponents of TDD are _actually_ saying is: "I don't know the _steps_ that will lead me to fulfill my specifications".

The difference between those is basically unit testing. Of course you very rarely know what the details of your code will look like before you write it, so if you're unit testing small portions of code -such as your methods- you will end up rewriting a lot of (mostly useless) tests and have a miserable time.

The right smallest unit to test in an OOP context is in my opinion generally the Class. And if you thought long enough about the architecture of your code (for example when you were breaking down your task in smaller steps, see _Atomic Git Commits_), you will know which classes you want at every step of the way.

Hence, you will never have to rewrite anything.

As I said before, I do believe that you should think long and hard before doing any coding, at least until you know _exactly_ what your specifications are, including some _hard_ thinking about possible edge cases.

This is what BDD is all about: thinking hard about your _exact specifications_ and coding them first. You know what you want, and once it's in the code, you just need to make the specs go brrrr green.

Frankly, once your specs are written down, you can turn off your brain. The rest of the work can barely be called "work".

## Conclusion

I hope you found something interesting in this article. Don't hesitate to share if you think this can help someone struggle less with the daily demands of software engineering.
