import React, { Component } from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from "lodash";

import MobileNav from "./mobile-nav";

// import Logo from "../img/logo.svg";

import Scroll from 'react-scroll';
const LocalLink  = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

// App
export default class Header extends Component {
	constructor(props) {
      super(props);

      this.state = {
				mobileMenuActive: false
      }
  }

	componentDidMount() {
	}

	toggleMobileMenu() {
		console.log(this);
		this.setState({
			mobileMenuActive: !this.state.mobileMenuActive
		})
	}

	render() {
        return (
          <div>

            <MobileNav
							mobileMenuActive={this.state.mobileMenuActive}
							toggleMobileMenu={this.toggleMobileMenu.bind(this)}
						/>

            {/* Header */}
            <div className="header-holder">
              <header id="header">
                <Link to="/" className="logo">
                  <img src="../img/logo.svg" alt="Brett Snaidero" />
                </Link>
                <nav className="main-nav">
                  <ul>
                    <li>
											<LocalLink to="profile" spy={true} smooth={true} offset={50} duration={500}>Profile</LocalLink>
										</li>
                    <li>
											<LocalLink to="work" spy={true} smooth={true} offset={50} duration={500}>Work</LocalLink>
										</li>
                    <li>
											<LocalLink to="writing" spy={true} smooth={true} offset={50} duration={500}>Writing</LocalLink>
										</li>
                  </ul>
                </nav>
                <div className="c2a">
                  <LocalLink to="contact" title="Contact">Let’s chat!</LocalLink>
                  <button className={"menu-btn" + (this.state.mobileMenuActive ? " open" : "")} onClick={ () => this.toggleMobileMenu() }>
                    <div className="icon">
                      <span />
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
