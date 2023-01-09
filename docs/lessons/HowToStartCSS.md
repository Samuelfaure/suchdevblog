---
title: How to Start Learning CSS without hating yourself
description: Much CSS, very beginner, so best practices.
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---
# How to Start Learning CSS without hating yourself

I've been teaching / mentoring quite a lot of webdev students in my spare time.
We start, of course, with HTML CSS.
HTML goes okay, for the most part. CSS, well, less. This is due, I think, to the particularities
of CSS, where it is very, very easy to shoot yourself in the foot.

The main problem is **the student THINKING they got it right, when they didn't.** It looks okay, therefore it is okay.
Of course, as soon as the page move a pixel, everything falls apart, and you never manage to really get
what you wanted in the beginning.

I'm going to explain the mistakes ALL the new CSS enthusiasts make, by a simple set of rules to follow 95% of the time.

## Rule 0 : Use the devtools.

Every modern browser comes with a set of devtools. Learn it. Use it. You can, very easily :
- See which CSS was applied
- See computed padding, margin, border, offset of any element
- See which fonts are rendered
- Simulate a smaller device
- Try new things directly on the browser

And Much More™

## Rule 1 : Understand the default CSS.

CSS code is a set of rules applied on the HTML to make it look good.

Every browser comes with its own set of default rules. You have to deal with them too.
It also might explain a difference between your page on Firefox and on Chrome.

## Rule 2 : The two CSS properties to know perfectly.

There are hundreds (thousands ?) of possible CSS properties. You can't learn them all right now, but you won't need most of them.

However, two of those properties you have to know PERFECTLY :

`DISPLAY` and `POSITION`.

Specifically, you need to know the following `DISPLAY` properties perfectly: `none, initial, inherit, inline, block, flex, grid, inline-block, inline-flex, inline-grid`.

You need to know the following `POSITION` properties perfectly: `initial, inherit, static, relative, absolute, fixed, sticky`.

If you don't have a very good understanding of those, stop everything and come back when you do. Take all the time you need, but learn them perfectly.

Believe me, it will save yourself a LOT of time.

## Rule 3 : You don't want width or height (usually).

`width` and `height` are so cool ! You use them, and it fixes the height and width of the div ! So precise !

But actually you don't want to use them.

So many times I saw a student trying to make a box bigger, and they go for `width` and/or `height`. Then on bigger screens it will be too small.

That's because they wanted a *minimum size*, not a fixed size.

If you stop and think, you'll realize that 95% of the time, you want `min-width`, `max-width` and the like.

## Zen Interlude

My student, join me in the river, and I shall teach you the art of CSS.
CSS stands for Cascading Style Sheets. CSS code flows like the water of a cascade. You need simplicity and flexibility before anything. Punching the water will get you nowhere, whereas redirecting a whole river takes minimal effort.

Don't use a bulldozer to pick up a flower. Always go for the most flexible solution. As such, `min-width` will usually be better than `width`.

## Rule 4 : Use the right units.

There are a lot of units in CSS, but as a beginner you can usually get away with only `em`, `%`, and `px`. Some would add `vh`, `vw` and `rem`, but I don't think you need them for now.

What you really need is, rather, knowing perfectly which one from those three (`em`, `%`, and `px`) are the most adapted to the situation. One mistake here can cost you a lot.

## Rule 5 : Mobile-first.

All beginners want to start with Desktop, and it is a very bad idea.

Always start designing for the smallest of smartphones, then only go to the larger resolutions.

How small? 280px wide or less.

## Rule 6 : Use BEM

Good naming is one of the hardest things to achieve in programming.

Using the BEM (Block Element Modifier) methodology will take care of that for you, with the added bonus of a styling convention that will make your code clean and easy to read.

## Rule 99 : Enjoy yourself !

And stay hydrated !
