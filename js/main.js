    var tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;
    function onYouTubeIframeAPIReady() {
      player = new YT.Player('player', {
        height: '440',
        width: '780',
        videoId: 'l3aoecca3uU',
        playerVars: { 'autoplay': 0, 'controls': 0, 'wmode' : 'transparent'},
        events: {
          'onStateChange': onPlayerStateChange
        }
      });
    }

    var done = false;
    function onPlayerStateChange(event) {
      if (event.data == YT.PlayerState.PLAYING && !done) {
        //setTimeout(stopVideo, 6000);
        done = true;
      }
    }
    function stopVideo() {
      player.stopVideo();
    }