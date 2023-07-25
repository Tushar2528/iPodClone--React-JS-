import React from "react";
import musicStyles from "./MusicScreen.module.css";

class MusicScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { musicToggle, hoverMusic } = this.props;
    return (
      <>
        {musicToggle ? (
          <div className={musicStyles.mainDiv}>
            <div
              className={`${musicStyles.insideDivs} ${
                hoverMusic === 0 ? musicStyles.highlight : null
              }`}
            >
              All Songs
            </div>
            <div
              className={`${musicStyles.insideDivs} ${
                hoverMusic === 1 ? musicStyles.highlight : null
              }`}
            >
              Artists
            </div>
            <div
              className={`${musicStyles.insideDivs} ${
                hoverMusic === 2 ? musicStyles.highlight : null
              }`}
            >
              Favourites
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default MusicScreen;
