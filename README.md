# GreenSock Animation Tools

Helpful tools that make animating with GreenSock just a little bit easier.

## Demo

![Screen capture of the demo](https://github.com/fromtheoutfit/gs-animation-tools/blob/master/demo.gif)

…or, you can try it yourself on [this simple animation](http://fromtheoutfit.github.io/gs-animation-tools/html/).

## How to Implement

The order of things is important:

1. GreenSock's platform file(s); [learn more here](http://greensock.com/get-started-js#loading)
2. Your animation's script; example: `<script src="/path/to/animations.js"></script>`
3. This animation tools' script; example: `<script src="/path/to/gs-animation-tools.js"></script>`
4. Call the animation tools and pass optional parameters as needed; example: `<script>_gsAnimationTools(tlMaster, 0.15, 0.15);</script>`

You can see this order in use in [the demo's index.html file](https://github.com/fromtheoutfit/gs-animation-tools/blob/master/html/index.html).

## Parameters

`_gsAnimationTools(timelineName, seekBackwardDuration, seekForwardDuration);` where…

* `timelineName` is the name of your primary timeline, and defaults to `tl`
* `seekBackwardDuration` is the number of seconds you want to jump _back_, and defaults to `0.1`
* `seekForwardDuration` is the number of seconds you want to jump _forward_, and defaults to `0.1`

…and can be seen in [the demo's index.html file](https://github.com/fromtheoutfit/gs-animation-tools/blob/master/html/index.html#L43), like so: `_gsAnimationTools(tlMaster, 0.15, 0.15);`

## Keyboard Shortcuts

* <kbd>Spacebar</kbd> will toggle between play and pause
* <kbd>&larr;</kbd> will seek back by the value you've defined above, or by `0.1` seconds if left undefined
* <kbd>&rarr;</kbd> will seek forward by the value you've defined above, or by `0.1` seconds if left undefined
* <kbd>esc</kbd> will restart the animation from it's beginning
