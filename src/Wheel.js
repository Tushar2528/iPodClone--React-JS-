// Import statements

import React from "react";
import wheelStyles from "./Wheel.module.css";
import ZingTouch from "zingtouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faForward,
  faBackward,
  faPause,
  faPlay
} from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";

class Wheel extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount() {
    const { toggleMenu, hoverIndex, handleRotate } = this.props;
    const secondDiv = document.querySelector(`.${wheelStyles.secondDiv}`);
    const gestureRegion = new ZingTouch.Region(secondDiv);
    gestureRegion.bind(secondDiv, "rotate", (event) => handleRotate(event));
  }

  render() {
    const {
      toggleMenu,
      handleSelect,
      handlePlayPauseClick,
      isPlaying,
      play
    } = this.props;
    const secondDivClass = classNames(wheelStyles.secondDiv, {
      [wheelStyles.songPlay]: isPlaying
    });
    return (
      <>
        <div className={wheelStyles.firstDiv}>
          <div className={secondDivClass}>
            {/* Menu Icon/Button */}
            <button className={wheelStyles.menuButton}>
              <FontAwesomeIcon icon={faBars} onClick={toggleMenu} />
            </button>

            {/* Forward Icon/Button */}
            <button className={wheelStyles.forwardButton}>
              <FontAwesomeIcon
                icon={faForward}
                onClick={this.props.forwardSong}
              />
            </button>

            {/* Backward Icon/Button */}
            <button className={wheelStyles.backwardButton}>
              <FontAwesomeIcon
                icon={faBackward}
                onClick={this.props.backwardSong}
              />
            </button>

            {/* Pause/Play Icon/Button */}
            <button
              onClick={handlePlayPauseClick}
              className={wheelStyles.pausePlayButton}
            >
              <FontAwesomeIcon icon={play ? faPause : faPlay} />
            </button>
            <button
              className={wheelStyles.thirdDiv}
              onClick={handleSelect}
            ></button>

            {/* <button onClick={this.props.forwardSong}>forward</button> */}
          </div>
        </div>
      </>
    );
  }
}

export default Wheel;
