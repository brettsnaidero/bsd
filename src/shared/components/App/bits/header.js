import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import MobileNav from "./mobile-nav";

// import Logo from "../img/logo.svg";

// App
export default class Header extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {
	}

	render() {
        return (
          <div>

            <MobileNav />

            {/* Header */}
            <div className="header-holder">
              <header id="header">
                <a className="logo" href="#">
                  <img src="../img/logo.svg" alt="Brett Snaidero" />
                </a>
                <nav className="main-nav">
                  <ul>
                    <li><a href="#profile">Profile</a></li>
                    <li><a href="#showcase">Work</a></li>
                    <li><a href="#writings">Writing</a></li>
                  </ul>
                </nav>
                <div className="c2a">
                  <a href="#contact" title>Let’s chat!</a>
                  <button className="menu-btn">
                    <div className="icon">
                      <span />
                      <span />
                      <span />
                    </div>
                    Menu
                  </button>
                </div>
              </header>
            </div>
          </div>
        );
    }
};
