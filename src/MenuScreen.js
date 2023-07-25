import React from "react";
import menuStyles from "./MenuScreen.module.css";

class MenuScreen extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { menuToggle, hoverIndex } = this.props;
    return (
      <>
        {menuToggle ? (
          <>
            <div className={menuStyles.mainDiv}>
              <div
                className={`${menuStyles.insideDivs} ${
                  hoverIndex === 0 ? menuStyles.highlight : null
                }`}
              >
                Cover Flow
              </div>

              <div
                className={`${menuStyles.insideDivs} ${
                  hoverIndex === 1 ? menuStyles.highlight : null
                }`}
              >
                Music
              </div>

              <div
                className={`${menuStyles.insideDivs} ${
                  hoverIndex === 2 ? menuStyles.highlight : null
                }`}
              >
                Games
              </div>

              <div
                className={`${menuStyles.insideDivs} ${
                  hoverIndex === 3 ? menuStyles.highlight : null
                }`}
              >
                Settings
              </div>
            </div>
          </>
        ) : null}
      </>
    );
  }
}

export default MenuScreen;
