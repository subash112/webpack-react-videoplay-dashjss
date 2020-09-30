import React from 'react';
// import ReactPlayer from 'react-player'
// import ReactJWPlayer from 'react-jw-player';
import dashjs from 'dashjs';

export default class Trailer extends React.Component {
  componentDidMount() {
    var url =
      'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd';
    var licenseToken = 'https://widevine-proxy.appspot.com/proxy';
    // var url = "https://dash.akamaized.net/envivio/EnvivioDash3/manifest.mpd";
    var player = dashjs.MediaPlayer().create();
    player.setProtectionData({
      'com.widevine.alpha': {
        serverURL: licenseToken,
        httpRequestHeaders: {
          'X-AxDRM-Message': licenseToken,
        },
      },
      // "com.microsoft.playready": {
      //   "serverURL": licenseToken,
      //   "httpRequestHeaders": {
      //     "X-AxDRM-Message": licenseToken
      //   }
      // }
    });

    player.initialize(document.querySelector('#videoPlayer'), url, true);
  }

  render() {
    return (
      <>
        <p>Player</p>
        <video id='videoPlayer' controls></video>
        {/* <ReactPlayer url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' controls playing /> */}
        {/* <ReactJWPlayer
          playerId='player'
        //   isAutoPlay = {true}
           playerScript='https://cdn.jwplayer.com/libraries/3n9yE8ur.js'
        //   playlist='https://link-to-my-playlist.json'
            file = 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd'
            licenseKey = 'https://widevine-proxy.appspot.com/proxy'
        /> */}
      </>
    );
  }
}
