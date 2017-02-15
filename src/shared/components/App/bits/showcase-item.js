import React, {Component} from 'react';

// Utils
import * as _ from "lodash";

import {Motion, spring} from 'react-motion';

// App
export default class ShowcaseItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 10,
      left: 10,
      width: 300,
      height: 300,
      windowWidth: 500,
      windowHeight: 1000,
      toggle: false,
      transitionConfig: {
        stiffness: 180,
        damping: 25,
        precision: 100
      }
    }
  }

  componentDidMount() {
    let top = this.refs.img.getBoundingClientRect().top;
    let left = this.refs.img.getBoundingClientRect().left;
    let width = this.refs.img.offsetWidth;
    let height = this.refs.img.offsetHeight;
    let windowWidth = document.documentElement.clientWidth / 2;
    let windowHeight = document.documentElement.clientHeight;

    this.setState({
      top: top,
      left: left,
      width: width,
      height: height,
      windowWidth: windowWidth,
      windowHeight: windowHeight
    });
  }

  toggle() {
    let top = this.refs.img.getBoundingClientRect().top;
    let left = this.refs.img.getBoundingClientRect().left;
    let width = this.refs.img.offsetWidth;
    let height = this.refs.img.offsetHeight;
    let windowWidth = document.documentElement.clientWidth / 2;
    let windowHeight = document.documentElement.clientHeight;

    this.setState({
      top: top,
      left: left,
      width: width,
      height: height,
      toggle: !this.state.toggle,
      windowWidth: windowWidth,
      windowHeight: windowHeight
    });
  }

  handleMouseDown() {
    // Tell parent component, so it can show Modal
    this.props.showItem(this.props.num);
    // Handle image showing
    this.toggle();
  }

  handleTouchStart(e) {
    e.preventDefault();
    this.handleMouseDown();
  }

  render() {
    return (
      <li>
        <a href="#" className="item iseeyou" onMouseDown={this.handleMouseDown.bind(this)} onTouchStart={this.handleTouchStart}>
          <div className="most">
            <div className="img-mask">
              <div className="img-spacer"/>
              <div className="show-mask"/>
              <div className="img" ref="img" style={{
                backgroundImage: 'url(' + this.props.image + ')'
              }}/>
              <Motion style={{
                top: (this.state.toggle ? spring(0, this.state.transitionConfig) : spring(this.state.top, this.state.transitionConfig)),
                left: (this.state.toggle ? spring(0, this.state.transitionConfig) : spring(this.state.left, this.state.transitionConfig)),
                width: (this.state.toggle ? spring(this.state.windowWidth, this.state.transitionConfig) : spring(this.state.width, this.state.transitionConfig)),
                height: (this.state.toggle ? spring(this.state.windowHeight, this.state.transitionConfig) : spring(this.state.height, this.state.transitionConfig)),
                opacity: (this.state.toggle ? spring(1, this.state.transitionConfig) : spring(0, this.state.transitionConfig))
              }}>
                {({
                  positionOn,
                  top,
                  left,
                  width,
                  height,
                  opacity
                }) => <div className={"zoomer " + (this.state.toggle ? "active" : "nope")} style={{
                  backgroundImage: `url(${this.props.image})`,
                  top: `${top}px`,
                  left: `${left}px`,
                  width: (opacity < 1 ? `${width}px` : `50vw`),
                  height: (opacity < 1 ? `${height}px` : `100vh`),
                  display: (opacity > 0 ? 'block' : 'none'),
                  position: (opacity > 0 ? 'fixed' : 'absolute'),
                  opacity: `${opacity}`
                }}/>
			}
              </Motion>
            </div>
            <div className="number-label">{(this.props.num + 1)}</div>
            <div className="text-label">
              <div className="title">
                <span>{this.props.title}</span>
              </div>
              <div className="desc">
                <span>{this.props.subtitle}</span>
              </div>
            </div>
          </div>
          <div className="url">http://mmjrealestate.com.au</div>
        </a>
      </li>
    );
  }
};
