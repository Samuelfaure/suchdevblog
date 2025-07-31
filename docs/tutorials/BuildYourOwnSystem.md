---
title: 📐 Build your own system with ArchLinux
description: Much arch, Very linux, so pretty
footer: CC-BY-4.0 Licensed | Copyright © 2018-present by Samuel Faure <3
---

# 📐 Build your own system with ArchLinux

This article was initially written on [dev.to](https://dev.to/samuelfaure/build-your-own-system-with-archlinux-240o/)

![ArchLinux intro](/images/archlinux_intro.webp)

I wrote a comment on dev.to recently that gathered quite some attention; It was about my custom Arch system. I felt like it would be useful to give a 101 how-to guide so people that are interested can enjoy the process of building their own system as well.

## Why building your own system ?

### Knowledge

Building your own system forces you to know everything about it, therefore becoming a way better linux user (or even computer user). The knowledge I got this way was (and still is) extremely useful in my daily job.

### Productivity

You will design the system according to your needs. Instead of adapting your workflow to the software, you will design the software to adapt to your workflow.

And armed with your new knowledge of Linux, you will be able to better deal with any bug or issue that inevitably arise when one use an operating system.

### The joy of creation

It's rare to find such a great opportunity to build something that can be both beautiful, and useful. This will be a great opportunity to train your designing skills, both for the aesthetic and the UX/UI.

And the best part: you get to use this system everyday, all day, while you work or chill on your computer !

## Why Arch Linux ?

Arch Linux is amazing. A lot of linux distributions have a goal to be more accessible to the mainstream user, and they succeed more or less at this.

Arch linux goes in the opposite direction. The philosophy of Arch can be summed up as such :

- **Minimalism**: Nothing is assumed of the user's needs.
- **Not User-Friendly, but User-Centric**: Things should not be made easy for beginners, things should be *simple*.
- **Pragmatism**: you don't want a system designed around an ideology, you want a system that *works*.

## What does it look like ?

When you boot Arch Linux for the first time, you'll be greeted by this :
![ArchLinux Command Line](/images/archlinux_commandline.webp)

A simple command line. If you want more, you'll have to build it yourself.

## What CAN it look like ?

There's the good part: since you start from nothing, nothing is stopping you from doing whatever you want with your computer. The only limit is your imagination. Here's the same system some time after:

![ArchLinux Result 1](/images/archlinux_result1.webp)

Prettier, right ?

And I'm by no means talented. If you want to see some true masterpieces, go check out the [unixporn subreddit](https://www.reddit.com/r/unixporn/top/?t=all) (Safe for work !)

## What do I need to start ?

The only thing you need for this project is TIME. The worst thing that can happen (as far as I know) is that you end up stuck with a non-completely usable computer, which can be a problem if you need this computer for work. I personally spent about 2 weeks on my system before it was 100% functional (this amount of time will depend on your current linux skill).

If this is an impossibility, consider starting this project on a computer that you don't need for a while, on a dual boot, or on a virtual machine.

Your time will mostly be spent reading the [Arch wiki](https://wiki.archlinux.org/), one of the most acclaimed resource on the whole web. It will tell you more or less everything you need to know.

## But I don't want to dive right in, can I take some preparatory steps first ?

Sure ! Some things that can help you learn before :
- Switch to a user-friendly linux distribution.  Some good choices are Linux Mint, or Manjaro (Manjaro is actually based on Arch !).
- Read books ! I would advise you to read "How Linux Works" (Brian Ward), an extremely interesting and detailed book about unix and linux. This will help you tremendously !

## What are the steps for building my own system ?

I won't go into the details, I trust you to RTFM; however it will be useful to explain the general steps:

1/ Install Arch Linux on your computer, be greeted by the Command Line©
2/ Decide on which packages you want; Install them; Configure them.
3/ Configure the Arch Linux system itself, and *voilà*.

It's as "simple" as that. It all boils down to picking what you want for your system, and learning how to configure everything correctly.

For the configuration, you will obviously spend some time reading the documentation for Arch and for your packages (always check if your package have a page on the amazing [Arch wiki](https://wiki.archlinux.org/)).

For the choice of packages, I can give you some pointers (pun intended).

![ArchLinux Packages](/images/archlinux_packages.webp)

## Some packages that might interest you

This list is just some of my personal's favorites. If you want to find other cool ideas, don't hesitate to check out the [unixporn subreddit](https://www.reddit.com/r/unixporn/top/?t=all).

### Which shell to use ?

The usual choices are Bash or Zsh. My personal choice is Zsh with oh-my-zsh installed, for an amazing shell experience.

### A graphical server

The command line is nice and all, but it can't display Netflix ! So you will probably want more.
Most applications require that you install a graphical server.

I would advise to check out the X.Org window system. A possible alternative is Wayland, but it seems a bit too new and unpolished for a beginner user.

### How to launch the graphical server ?

The Arch Wiki will tell you more about this, but basically you can configure your shell profile (.bash_profile or .zprofile) to launch the X server at startup.

Then you can configure xinit (in the .xinitrc file) to launch any programs you want at the start of the X graphical server. I use this for example to configure my laptop's touchpad.

### Desktop environment or Tile window manager ?

Something great with building your own system: you get to ask yourself questions that few people do.

If you ever used a computer, you probably used a Desktop environment, where you click on a folder icon to open the folder window, and such.
A Tile window manager is a whole other paradigm, where each program simply opens a new tile on your screen. Most of your navigation on the computer's file system will be made through the command line.

This made much more sense to me and seemed way more practical. It will require some time to adapt for a beginner, but it's worth it.  I'd recommend i3 (or even i3-gaps, that I find more aesthetically pleasing).

![ArchLinux Result 2](/images/archlinux_result2.webp)

Some great desktop environments are available if you want a more classic user experience (KDE, GNOME...).

### A compositor

Not needed, but nice-to-have.

A compositor is an extra layer between the graphical server and your programs. Instead of having your programs directly draw unto the screen, they draw into memory on the compositor, which will then draw unto the screen. This allows for some better user experience and better effects (such as windows transparency).

I personally use picom (ex-compton).

### The right terminal

This is especially important if you're spending a lot of time on the shell, either for work, or because you find it more convenient (and in that case you probably went with a Tile window manager !)

Some great choices exist here, to name a few : kiTTY, Terminator, URxvt, st...

In the end I went with Termite for the great VIM-like bindings that allows me to navigate easily with the keyboard.

### Amazing packages to explore

- You will probably want a wallpaper ! Check out "feh".
- "Rofi" is an amazing program launcher, highly customisable.
- "Dunst" will allow you to build your desktop notifications.

For more packages, I'll advise you to check out the amazing pieces at [unixporn subreddit](https://www.reddit.com/r/unixporn/top/?t=all)

![ArchLinux Logo](/images/archlinux_logo.webp)

## How to save my precious work ?

You will spend quite some time configuring your system and your packages. This can be hard work and it would be a shame to lose any of it.

The easiest way to save your work would be to copy your configuration files (usually nicknamed dotfiles) along with any configuration of interest on a git repository. However, that's not a very sustainable approach, since you'll probably be tweaking your system there and there for months (and even years: workflow improvement is a continuous process !). Copying your files manually every time can be very tedious !

You will probably need a more sustainable approach. You can, for example, symlink your dotfiles (and any other file of interest) from your git repository towards your system. That way, any change you make to the configuration file will be saved on your repository. Maybe you can use a CRON job to regularly push that repository on github.

I would advise to go even further and just learn to use [Ansible](https://www.ansible.com/). This is a wonderful IT automation tool, and very simple to use. You just list tasks in playbooks written in YAML and execute them. If you're working in IT, that's also a very marketable skill.

If your computer breaks or gets stolen tomorrow, and you have a well-written ansible playbook, you can reinstall your own system with a single command.

Isn't it a very satisfying thought ?

## In conclusion

Building your own system takes time, dedication, and a lot of reading... But this experience is incredibly enriching !
And as always, if you're stuck or you still don't know where to start, you can ask me right there or via mail. Me and countless enthusiasts will gladly give you a hand.

Happy building !

