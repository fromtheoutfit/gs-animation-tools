function _gsAnimationTools(timelineName, seekBackwardDuration, seekForwardDuration) {


  // Set common defaults if any parameter isn't defined:
  timelineName = timelineName                 || tl;
  seekBackwardDuration = seekBackwardDuration || 0.1;
  seekForwardDuration = seekForwardDuration   || 0.1;


  var animationTools, appendDiv, currentTimeNode, totalTimeNode, isTouch;


  animationTools = {

    // Append a string to an element:
    appendCode: function(elem, str) {
      appendDiv = document.createElement('div');
      appendDiv.innerHTML = str;
      while (appendDiv.children.length > 0) {
        elem.appendChild(appendDiv.children[0]);
      }
    },

    // Play or pause the animation:
    playPause: function(evt) {
      evt.preventDefault();
      timelineName.paused(!timelineName.paused());
      console.log('%cplay / pause', 'background-color:#ffc;');
    },

    // Seek the animation backwards:
    seekBackward: function(evt) {
      evt.preventDefault();
      if (!timelineName.paused()) timelineName.pause();
      timelineName.time(timelineName.time() - seekBackwardDuration);
      console.log('%cseek -' + seekBackwardDuration, 'background-color:#ffc;');
    },

    // Seek the animation forwards:
    seekForward: function(evt) {
      evt.preventDefault();
      if (!timelineName.paused()) timelineName.pause();
      timelineName.time(timelineName.time() + seekForwardDuration);
      console.log('%cseek +' + seekForwardDuration, 'background-color:#ffc;');
    },

    // Restart the animation:
    restart: function(evt) {
      evt.preventDefault();
      timelineName.restart();
      console.log('%crestart', 'background-color:#ffc;');
    }

  };


  // Use appendCode() to append CSS and HTML to <body>.
  // --------------------------------------------------------------------------

  animationTools.appendCode(document.body,
    '<style>' +
      '._animation-tools {bottom:5px;font-family:sans-serif;position:fixed;text-align:center;width:100%;z-index:99999}' +
      '._animation-tools-info {background-color:rgba(255,255,255,.5);border-radius:0.25em;display:inline-block;padding:0 0.5em;}' +
      '._animation-tools-playback-controls {opacity:0.5;}' +
      '._animation-tools-playback-controls:hover {opacity:1;}' +
      '._animation-tools-playback-controls button {font-size:75%;}' +
    '</style>' +
    '<div class="_animation-tools">' +
      '<div class="_animation-tools-info">' +
        '<span id="_animation-tools-current-time"></span> / <span id="_animation-tools-total-time"></span>' +
      '</div>' +
      '<div class="_animation-tools-playback-controls">' +
        '<button id="_animation-tools-play-pause">Play/Pause [spacebar]</button>' +
        '<button id="_animation-tools-seek-backward">-' + seekBackwardDuration + ' [&larr;]</button>' +
        '<button id="_animation-tools-seek-forward">+' + seekForwardDuration + ' [&rarr;]</button>' +
        '<button id="_animation-tools-restart">Restart [esc]</button>' +
      '</div>' +
    '</div>'
  );


  // Get and render current time and total time.
  // --------------------------------------------------------------------------

  // Find the two target nodes that we'll fill with time details:
  currentTimeNode = document.querySelector('#_animation-tools-current-time');
  totalTimeNode   = document.querySelector('#_animation-tools-total-time');

  // Add an event callback to the primary timeline:
  timelineName.eventCallback('onUpdate', updateTime);

  // Fill currentTimeNode with the animation's current time:
  function updateTime() {
    currentTimeNode.innerHTML = timelineName.totalTime().toFixed(2);
  }

  // Fill totalTimeNode with the animation's total time:
  totalTimeNode.innerHTML = timelineName.duration().toFixed(2);


  // Playback controls.
  // --------------------------------------------------------------------------

  // Determine whether or not this is a touch-supporting device:
  isTouch = ('ontouchstart' in window) ? true : false;

  // Button presses:
  document.querySelector('#_animation-tools-play-pause').addEventListener(isTouch ? 'touchstart' : 'click', animationTools.playPause);
  document.querySelector('#_animation-tools-seek-backward').addEventListener(isTouch ? 'touchstart' : 'click', animationTools.seekBackward);
  document.querySelector('#_animation-tools-seek-forward').addEventListener(isTouch ? 'touchstart' : 'click', animationTools.seekForward);
  document.querySelector('#_animation-tools-restart').addEventListener(isTouch ? 'touchstart' : 'click', animationTools.restart);

  // Key presses:
  document.addEventListener('keydown', function(evt) {
    switch(evt.keyCode) {
      case 32:
        animationTools.playPause(evt);
        break;
      case 37:
        animationTools.seekBackward(evt);
        break;
      case 39:
        animationTools.seekForward(evt);
        break;
      case 27:
        animationTools.restart(evt);
        break;
    }
  });


}
