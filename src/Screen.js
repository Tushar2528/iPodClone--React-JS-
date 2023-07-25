import React from "react";
import screenStyles from "./Screen.module.css";
import MenuScreen from "./MenuScreen";
import MusicScreen from "./MusicScreen";

class Screen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const {
      menuToggle,
      musicToggle,
      hoverIndex,
      hoverMusic,
      displaySettings,
      coverFlow,
      gameSettings,
      artists,
      favourites,
      songs,
      audioRef1,
      audioRef2,
      audioRef3,
      songNumber,
      apple
    } = this.props;
    return (
      <>
        <div className={screenStyles.outerDiv}>
          <div className={screenStyles.innerDiv}>
            {coverFlow ? (
              <div className={screenStyles.imageDiv}>
                <b>Cover Flow</b>
              </div>
            ) : null}

            {apple ? (
              <div className={screenStyles.imageDiv}>
                {
                  <img
                    className={screenStyles.screenImage}
                    src="/images/apple.png"
                    alt="Settings"
                  />
                }
              </div>
            ) : null}
            {gameSettings ? (
              <div className={screenStyles.imageDiv}>
                {
                  <img
                    className={screenStyles.screenImage}
                    src="/images/game1.jpg"
                    alt="Settings"
                  />
                }
              </div>
            ) : null}

            {musicToggle ? (
              <div className={screenStyles.imageDiv}>
                <div className={screenStyles.musicDiv}>
                  <MusicScreen
                    musicToggle={musicToggle}
                    hoverMusic={hoverMusic}
                  />
                </div>
              </div>
            ) : null}

            {displaySettings ? (
              <div className={screenStyles.imageDiv}>
                <img
                  className={screenStyles.screenImage}
                  src="/images/settings.png"
                  alt="Settings"
                />
              </div>
            ) : null}

            {songs && songNumber === 0 ? (
              <div className={screenStyles.imageDiv}>
                <img
                  className={screenStyles.songImage}
                  src="/images/song1.jpg"
                  alt="artist"
                />
                <div className={screenStyles.audioDiv1}>
                  <audio
                    ref={audioRef1}
                    className={screenStyles.audioBar}
                    controls
                  >
                    <source src="/audio/Somethinjustlikethis (1).mp3" />
                  </audio>
                </div>
              </div>
            ) : null}
            {songs && songNumber === 1 ? (
              <div className={screenStyles.imageDiv}>
                <img
                  className={screenStyles.songImage}
                  src="/images/song2.jpg"
                  alt="artist"
                />
                <div className={screenStyles.audioDiv2}>
                  <audio
                    ref={audioRef2}
                    className={screenStyles.audioBar}
                    controls
                  >
                    <source src="/audio/Call You Mine.mp3" />
                  </audio>
                </div>
              </div>
            ) : null}
            {songs && songNumber === 2 ? (
              <div className={screenStyles.imageDiv}>
                <img
                  className={screenStyles.songImage}
                  src="/images/song3.jpg"
                  alt="artist"
                />
                <div className={screenStyles.audioDiv3}>
                  <audio
                    ref={audioRef3}
                    className={screenStyles.audioBar}
                    controls
                  >
                    <source src="/audio/ROSE-GONE.mp3" />
                  </audio>
                </div>
              </div>
            ) : null}

            {artists ? (
              <div className={screenStyles.imageDiv}>
                <img
                  className={screenStyles.screenImage}
                  src="/images/artist.png"
                  alt="artist"
                />
              </div>
            ) : null}

            {favourites ? (
              <div className={screenStyles.imageDiv}>
                <img
                  className={screenStyles.screenImage}
                  src="/images/favourites.png"
                  alt="favourites"
                />
              </div>
            ) : null}
            <div className={screenStyles.menuDiv}>
              <MenuScreen menuToggle={menuToggle} hoverIndex={hoverIndex} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Screen;
