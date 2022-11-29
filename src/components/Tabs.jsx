import React, { Component } from "react";
import PropTypes from "prop-types";
import Tab from "./Tab";

import Scroll from "react-scroll";
const scroll = Scroll.animateScroll;

class Tabs extends Component {
  static propTypes = {
    children: PropTypes.instanceOf(Array).isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      activeTab: this.props.children[0].props.label,
      backgroundwhite: false,
    };
  }

  onClickTabItem = (tab) => {
    scroll.scrollToTop();
    this.setState({ activeTab: tab });
  };

  handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      this.setState({
        backgroundwhite: true,
      });
    } else {
      this.setState({
        backgroundwhite: false,
      });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.handleWindowScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleWindowScroll);
  }

  render() {
    const {
      onClickTabItem,
      props: { children },
      state: { activeTab },
    } = this;

    const { currentLanguageCode } = this.state;

    console.log("currentLanguageCode xxxxxxxxxxx", currentLanguageCode);
    return (
      <div className="tabs">
        <div
          className={`fixed top-0 w-full transition-all duration-700 z-10 py-4 bg-white ${
            this.state.backgroundwhite ? "shadow-lg !py-2" : ""
          }`}
        >
          <img
            className={`w-auto transition-all duration-700 m-auto pt-3 ${
              this.state.backgroundwhite ? "h-[60px]" : "h-[90px]"
            }   bg-transparent`}
            src={this.props.data.logo}
            alt="/"
          />
          <div className="flex items-center w-full py-3 px-4">
            <ol className="flex w-full items-center justify-center gap-5">
              {children.map((child) => {
                const { label } = child.props;

                return (
                  <Tab
                    activeTab={activeTab}
                    key={label}
                    label={label}
                    onClick={onClickTabItem}
                  />
                );
              })}
            </ol>
          </div>
        </div>

        <div className="w-full h-full pt-[160px]">
          {children.map((child) => {
            if (child.props.label !== activeTab) return undefined;
            return child.props.children;
          })}
        </div>
      </div>
    );
  }
}

export default Tabs;
