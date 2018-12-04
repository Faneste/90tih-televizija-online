var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
  height: '',									//// height of the video window
  width: '',									//// width of the video window
  videoId: 'OTiHCiysBoo',							//// starting video id
  playerVars: {
    controls: '0',   							//// should it show video controls (0 = doesn't show)
    showinfo: '0',								//// should it show name of the video and uplouder (0 = doesn't show)
    autoplay: '0',								//// autoplay when it loads the player
    disablekb: '1',								//// should it turn on keyboard controls (1 = turns it off)
    iv_load_policy: '3',						//// should it show video annotations (1 = shows, 3 = doesn't show)
    rel: '0',									//// should it show recomended videos at the end (0 = doesn't show)
    loop: '1',									//// loops the video when it ends from the start (1 = loops)
  },
  events: {
    'onReady': onPlayerReady,
    'onStateChange': onPlayerStateChange
  }
  });
}

window.addEventListener("keydown", checkKeyPressed, false); //// function that recognizes keypress and changes the channel

function checkKeyPressed(e) {
  if (e.keyCode == "32") {								//// changes the channel with the keycode (32 for space key)
  promeniKanal();
  }
}

var slide = document.getElementById('slider');		//// function for changing the volume

slide.onchange = function() {
  var plus = slide.value;
  player.setVolume(plus);
}

function onPlayerReady(event) {						//// starts the video when the player fully loads
  event.target.playVideo();
}

  var done = false;
  function onPlayerStateChange(event) {
    document.getElementById( "title" ).innerText = player.getVideoData().title; //// shows the video title and puts it in a div

    if (event.data == YT.PlayerState.PLAYING && !done) {	//// starts the video from the start when it finishes
      done = true;
    }
    if (event.data == YT.PlayerState.ENDED) {
    player.seekTo(0)
    }
  }

function stopVideo() {					//// starts a function when the video finishes
  player.stopVideo();
}

function promeniKanal() {				//// function for changing the channel ie. changing video id

  document.getElementById('noise').src = 'grafika/noise.gif';

  setTimeout(function() { 			//// starts TV noise gif when you change the channel
  noise.src =""; }, 1000);

    var trueKanali = sviKanali.filter(trueKanaliParameter => trueKanaliParameter.boolean === true);

    var a = Math.floor(Math.random() * trueKanali.length) + 0; // random number between 0 and kanali length
    var b = Math.floor(Math.random() * 21) + 0; // random number between 0 and 20
    player.loadVideoById(trueKanali[a][b], 45, "medium"); // loads the channel in player with 45 seconds time and medium quality

    // document.getElementById( "brojKanala" ).innerText = "Kanal broj " + a + ":"; // number and name of the channel video
  }
