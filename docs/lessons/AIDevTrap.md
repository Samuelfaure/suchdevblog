---
title: 🤖 The AI development trap that wastes your time
description: Master the balance between AI assistance and critical thinking.
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

# 🤖 The AI development trap that wastes your time

Has this ever happened to you?

You are asking your AI agent to develop something, correct a bug, or whatnot.

It's currently completely lost. You are burning a huge amount of tokens, and wasting your time. Despite refining your prompts more and more, it's just refusing to correctly do what you're asking it to do.

What's happening and how to avoid this annoying cycle?

## Take a step back: Why are we using AI in the first place?

Experienced programmers know this: the real gains of AI is not in the speed of development. A good senior can often fix a bug or develop a small feature faster than AI.

The real gain of AI is in the cognitive load reduction.

Writing code is hard, at the very least because your syntax must be perfect. And even for small logic iterations, you need to use your brain. And [brain use is a finite resource](/lessons/HowToNotUseYourBrain.md) - You have a fixed amount of thinking in you which refreshes when you take a break or sleep.

The real productivity gains of AI come from cognitive load reduction: because you are using your brain less, you can do much more during your day of work.

But this is a delicate balance. How much thinking should you really be doing?

Too much thinking and you're wasting on productivity gains. Not enough thinking, and you're entering the sunk-cost fallacy loop.

## This probably happened to you

You're prompting and prompting again, and usually it works great, but today for some reason, your agent is completely lost.

You realize you would have been done much sooner if you hadn't used AI at all, but you're in too deep by now, surely by the next prompt it will finally do what you're asking for... Okay, the next... Okay, the next for sure...

The thing is, because you didn't invest the initial cognitive load, you are just a little bit too lost. But thinking is hard and you don't want to spend this cognitive load now, especially since this would be equivalent to basically starting all over. After all this time and tokens burnt.

So you keep prompting and hoping for the best, and it only gets worse.

## What to do in this situation?

Take a step back and a deep breath. Realize the problem is that you haven't engaged your brain enough on this task.

Ask yourself those questions:

**Do I understand exactly the specifications I'm trying to implement, or the bug I'm trying to solve?**

If not, then take some time to define the specifications or understand the issue better. You can ask for help from the AI, but no coding authorized!

**Do I have an exact plan for implementing my changes?**

If not, then take some time to think about your implementation plan. Use the [atomic git commit workflow](/lessons/AtomicGitCommits.md) if you need to. Humans should take baby steps when developing, and so should AI.

**What is the current abstraction level to which I should be prompting now?**

Prompting can be high-level ("Implement this feature") or it can be low-level ("Refactor this method, rename this variable"). High-level prompting is more desirable in terms of productivity gains, but if AI could be consistently efficient at high-level, we'd all be out of a job by now.

Entering the sunk-cost fallacy cycle generally means you've overestimated the level of prompting you can ask from your model for this specific task. Take it down one or two levels. Right now, you need to take your AI by the hand and gently guide it to your solution.

**Which other information am I lacking?**

Think about any information you need to make your changes which is not absolutely clear for you at the moment. Use AI to explore the codebase if you need to, or to brainstorm solutions; but then again, no coding authorized for now!

## Bonus: Work with your agent in TDD

Test-Driven development is a great programming method (Although I know this is a controversial opinion) but with the popularization of AI agents, it became (in my opinion) a must-have.

Do you have your tests successfully failing? The bug is well reproduced? The specifications are well defined? If not, start your agent here. Writing tests has never been so quick and easy thanks to AI.

Just keep in mind that this is the most important part of development, and also the hardest. This is the part where your brain needs to be in full alert, everything should be crystal-clear and well defined.

You will also need to be very specific in your prompts about not coding the actual solution but only coding the tests for now. AI Agents have been trained to code solutions, so by default it will try, even when you didn't ask for it.

## If nothing works

Close your AI agent. Go back to the whiteboard. Reset both yours and the agent's context.

You will manage just fine! Just stop wasting your time on a sunk-cost fallacy cycle. It is a hard pill to swallow, but nothing you can't do. Stay in the command chair, and it will all work out.

An old proverb says: "Alcohol is a great servant, but a terrible master" - This is also true for AI. Be the master of your AI, not its servant.
