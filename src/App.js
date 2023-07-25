import React, { useRef } from "react";
// import "./styles.css";
import Wheel from "./Wheel";
import Screen from "./Screen";

// import { faHourglassEmpty } from "@fortawesome/free-solid-svg-icons";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.audioRef1 = React.createRef();
    this.audioRef2 = React.createRef();
    this.audioRef3 = React.createRef();
    this.state = {
      menuToggle: false,
      musicToggle: false,
      hoverIndex: -1,
      hoverMusic: -1,
      displaySettings: false,
      coverFlow: false,
      gameSettings: false,
      artists: false,
      favourites: false,
      songs: false,
      isPlaying: false,
      songNumber: 0,
      apple: true,
      play: false
    };
  }

  // function to forward the songs
  forwardSong = () => {
    console.log("Forward button clicked");
    if (this.state.songNumber <= 1) {
      const songNumber = this.state.songNumber + 1;
      this.setState({
        songNumber: songNumber,
        play: false,
        isPlaying: false
      });
    }

    console.log(this.state.songNumber);
  };

  // function to go to the previous songs
  backwardSong = () => {
    console.log("Backward button clicked");
    if (this.state.songNumber > 0) {
      const songNumber = this.state.songNumber - 1;
      this.setState({
        songNumber: songNumber,
        play: false,
        isPlaying: false
      });
    }
    console.log(this.state.songNumber);
  };

  //handling the play/pause of the songs using button in the wheel component instead of the audio bar

  handlePlayPauseClick = () => {
    const { isPlaying } = this.state;
    let audioElement;

    if (this.state.songNumber === 0) {
      audioElement = this.audioRef1.current;
    } else if (this.state.songNumber === 1) {
      audioElement = this.audioRef2.current;
    } else if (this.state.songNumber === 2) {
      audioElement = this.audioRef3.current;
    }

    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }

    this.setState({
      isPlaying: !isPlaying
    });
    this.setState((prevState) => ({
      play: !prevState.play
    }));
  };

  // function to handle the rotation gesture on the wheel and update components accordingly
  handleRotate = (event) => {
    const rotation = event.detail.distanceFromOrigin;
    const adjustedRotation = rotation < 0 ? rotation + 360 : rotation;
    const hoverIndex = Math.floor(adjustedRotation / 55) % 4;
    const hoverMusic = Math.floor(adjustedRotation / 45) % 3;
    console.log("Adjusted Rotation :", adjustedRotation);
    console.log("****************");
    console.log("HoverIndex :", hoverIndex);
    this.setState({
      hoverIndex: hoverIndex,
      hoverMusic: hoverMusic
    });
  };

  // Function to toggle Menu bar asper the button click event
  toggleMenu = () => {
    this.setState((prevState) => ({
      menuToggle: !prevState.menuToggle
    }));
  };
  // Function to toggle the music screen bar as per event
  toggleMusicMenu = () => {
    this.setState((prevState) => ({
      musicToggle: !prevState.musicToggle
    }));
  };

  // function to handle all the selections made in the ipod
  handleSelect = () => {
    if (this.state.hoverIndex === 0) {
      this.setState((prevState) => ({
        coverFlow: !prevState.coverFlow,
        menuToggle: false,
        musicToggle: false,
        displaySettings: false,
        gameSettings: false,
        artists: false,
        songs: false,
        apple: false
      }));
    }
    if (this.state.hoverIndex === 1) {
      this.setState((prevState) => ({
        musicToggle: true,
        menuToggle: false,
        coverFlow: false,
        displaySettings: false,
        gameSettings: false,
        artists: false,
        favourites: false,
        songs: false,
        apple: false
      }));
    }
    if (this.state.hoverIndex === 2) {
      this.setState((prevState) => ({
        gameSettings: !prevState.gameSettings,
        menuToggle: false,
        displaySettings: false,
        coverFlow: false,
        musicToggle: false,
        artists: false,
        songs: false,
        apple: false
      }));
    }
    if (this.state.hoverIndex === 3) {
      this.setState((prevState) => ({
        displaySettings: !prevState.displaySettings,
        menuToggle: false,
        coverFlow: false,
        gameSettings: false,
        musicToggle: false,
        artists: false,
        songs: false,
        apple: false
      }));
    }

    if (this.state.musicToggle === true) {
      if (this.state.hoverMusic === 0) {
        this.setState({
          artists: false,
          musicToggle: false,
          menuToggle: false,
          coverFlow: false,
          displaySettings: false,
          gameSettings: false,
          songs: true,
          apple: false
        });
      }
    }

    if (this.state.musicToggle === true) {
      if (this.state.hoverMusic === 1) {
        this.setState({
          artists: true,
          musicToggle: false,
          menuToggle: false,
          coverFlow: false,
          displaySettings: false,
          gameSettings: false,
          songs: false,
          favourites: false,
          apple: false
        });
      }
    }
    if (this.state.musicToggle === true) {
      if (this.state.hoverMusic === 2) {
        this.setState({
          favourites: true,
          artists: false,
          musicToggle: false,
          menuToggle: false,
          coverFlow: false,
          displaySettings: false,
          gameSettings: false,
          songs: false,
          apple: false
        });
      }
    }
  };

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

      isPlaying,
      songNumber,
      apple,
      play
    } = this.state;
    return (
      // Passing thje functions and state variables using props to the child components
      <div>
        <Screen
          menuToggle={menuToggle}
          musicToggle={musicToggle}
          hoverIndex={hoverIndex}
          hoverMusic={hoverMusic}
          displaySettings={displaySettings}
          coverFlow={coverFlow}
          gameSettings={gameSettings}
          artists={artists}
          favourites={favourites}
          songs={songs}
          audioRef1={this.audioRef1}
          audioRef2={this.audioRef2}
          audioRef3={this.audioRef3}
          isPlaying={isPlaying}
          handlePlayPauseClick={this.handlePlayPauseClick}
          songNumber={songNumber}
          apple={apple}
        />
        <Wheel
          toggleMenu={this.toggleMenu}
          toggleMusicMenu={this.toggleMusicMenu}
          hoverIndex={hoverIndex}
          hoverMusic={hoverMusic}
          handleRotate={this.handleRotate}
          handleSelect={this.handleSelect}
          handlePlayPauseClick={this.handlePlayPauseClick}
          forwardSong={this.forwardSong}
          backwardSong={this.backwardSong}
          isPlaying={isPlaying}
          play={play}
        />
      </div>
    );
  }
}

export default App;
