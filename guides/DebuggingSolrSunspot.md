---
title: Debugging Solr Sunspot like a pro
description: Fix that bug, SOlve that 404, 500, 503 and more
footer: MIT Licensed | Copyright © 2018-present by Samuel Faure <3
---
# Debugging classic Solr Sunspot issues like a pro

Solr is *awesome* and Sunspot is a cool wrapper for it. But troubleshooting is *hard*. Here are the main issues and how to fix them :

## Halp, Solr returns no results !

Did you build your index ? Try `RAILS_ENV=your_env bundle exec rake sunspot:solr:reindex`. Server should be started for this operation.
Always put RAILS_ENV at the beginning of the command.

## Halp, I have error 500 - RSolr::Error::ConnectionRefused !

Did you wait long enough for Solr to initialize ?
Usually, 3 seconds after running `rake sunspot:solr:start` is enough, but if you're working on a VM like travis-ci or circle-ci, it might be slower. I put a `sleep:30` command after launching Solr, which slows down my build 30 seconds but then Solr have enough time to launch.

This might also be a problem of conflicts between different Solr servers. Try killing your Solr processes and launch it again. Sometimes the java VM stays active, you might need to kill it too.

If it still doesn't work and you have a write.lock file in your index, try deleting it.

## Halp, I have error 503 - RSolr::Error::ConnectionRefused !

Did you start your server ?

No, really, did you ? Sunspot might tell you it is launched, but it is sometimes a lie.
To know if it launched, you can run `RAILS_ENV=your_env bundle exec rake sunspot:solr:run`.
This should launch it in the shell, so you will see if it crashes or not.
Or, just run `RAILS_ENV=your_env bundle exec rake sunspot:solr:start`. If it tells you that it launched correctly the second time, then it isn't launching correctly at all.

## Halp, I have error 404 - RSolr::Error::Http - 404 Not Found !

Usually, this is due to files missing.
Check your /solr/ folder, in Rails root.
Check if you do have the `solr/your_env/core.properties` file as well as the `solr/your_env/data` folder.
More importantly, check they are correctly copied wherever you are running your Solr.

## Halp, nothing worked !

The solution that works 90% of the time is a good ol' kill-and-restart.
Get the PID with `ps aux | grep solr` then `kill PID`.
Relaunching the server with `RAILS_ENV=your_env bundle exec rake sunspot:solr:start` is usually enough.
As said before, the java VM might still be active, you might need to kill it too, but it will show when you run `ps aux | grep solr`.

One last thing : if you're allocating a fixed memory size to Solr, this might be the issue. Try different values. Allocating too much memory might cause some trouble.

Hope it worked for you ! If I saved your ass, feel free to send me a thank-you note at <samuel.faure.dev@gmail.com>
