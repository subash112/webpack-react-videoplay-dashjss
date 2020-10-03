import React from 'react';
import dashjs from 'dashjs';

export default class Trailer extends React.Component {
  state = {
    playing: false
  }

  componentDidMount() {
    var url = 'https://bitmovin-a.akamaihd.net/content/art-of-motion_drm/mpds/11331.mpd';
    var licenseToken = 'https://widevine-proxy.appspot.com/proxy';
    var player = dashjs.MediaPlayer().create();
    player.setProtectionData({
      'com.widevine.alpha': {
        serverURL: licenseToken,
        httpRequestHeaders: {
          'X-AxDRM-Message': licenseToken,
        },
      },
      "com.microsoft.playready": {
        "serverURL": licenseToken,
        "httpRequestHeaders": {
          "X-AxDRM-Message": licenseToken
        }
      }
    });
    player.initialize(document.querySelector('#videoPlayer'), url, true);
  }

  play = () => {
    this.setState({playing: true})
  }

  render() {
    let {playing} = this.state

    return (
      <>
        <div className  = {playing ? 'display-none'  :  'display-block' }  >
            <h1>Loading...</h1>
        </div>

        <video id='videoPlayer' 
          className  = {!playing ? 'display-none'  :  'display-block' }  
          controls autoPlay preload = {0} onPlaying = {this.play} 
          style = {{
          height: '100%',
          width: '100%'
        }} />
      </>
    );
  }
}
