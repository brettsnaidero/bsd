import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import { Link } from 'react-router';
import Scroll from 'react-scroll';
const LocalLink  = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

// App
export default class MobileNav extends Component {
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

            {/* Mobile Nav */}
            <nav className={"pushy" + (this.props.mobileMenuActive ? " active" : "")}>
              {/* Main Nav */}
              <ul className="primary">
                <li className="pushy-submenu pushy-submenu-closed">
					{ this.props.nothome ? (
						<Link to="/#profile">Profile</Link>
					) : (
						<LocalLink to="profile" spy={true} smooth={true} offset={50} duration={500}>Profile</LocalLink>
					)}
                </li>
                <li className="pushy-submenu pushy-submenu-closed">
					{ this.props.nothome ? (
						<Link to="/#work">Work</Link>
					) : (
						<LocalLink to="work" spy={true} smooth={true} offset={50} duration={500}>Work</LocalLink>
					)}
                </li>
                <li className="pushy-submenu pushy-submenu-closed">
					{ this.props.nothome ? (
						<Link to="/#writing">Writing</Link>
					) : (
						<LocalLink to="writing" spy={true} smooth={true} offset={50} duration={500}>Writing</LocalLink>
					)}
                </li>
				<li className="pushy-submenu pushy-submenu-closed">
					{ this.props.nothome ? (
						<Link to="/#contact">Contact</Link>
					) : (
						<LocalLink to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</LocalLink>
					)}
                </li>
              </ul>
              {/* Social */}
              <ul className="social">
                <li>
                  <a href="https://www.instagram.com/brettsnaidero/" title="Instagram">
										<svg x="0px" y="0px" viewBox="0 0 48 48">
	                    <path id="Instagram" d="M24,0c-6.5,0-7.3,0-9.9,0.1c-2.6,0.1-4.3,0.5-5.8,1.1C6.7,1.9,5.4,2.7,4,4C2.7,5.4,1.9,6.7,1.3,8.3
	                                c-0.6,1.5-1,3.3-1.1,5.8C0,16.7,0,17.5,0,24c0,6.5,0,7.3,0.1,9.9c0.1,2.6,0.5,4.3,1.1,5.8C1.9,41.3,2.7,42.6,4,44
	                                c1.3,1.3,2.7,2.2,4.3,2.8c1.5,0.6,3.3,1,5.8,1.1C16.7,48,17.5,48,24,48c6.5,0,7.3,0,9.9-0.1c2.6-0.1,4.3-0.5,5.8-1.1
	                                c1.6-0.6,2.9-1.4,4.3-2.8c1.3-1.3,2.2-2.7,2.8-4.3c0.6-1.5,1-3.3,1.1-5.8C48,31.3,48,30.5,48,24c0-6.5,0-7.3-0.1-9.9
	                                c-0.1-2.6-0.5-4.3-1.1-5.8C46.1,6.7,45.3,5.4,44,4c-1.3-1.3-2.7-2.2-4.3-2.8c-1.5-0.6-3.3-1-5.8-1.1C31.3,0,30.5,0,24,0z M24,4.3
	                                c6.4,0,7.2,0,9.7,0.1C36,4.6,37.3,5,38.2,5.3c1.1,0.4,1.9,1,2.8,1.8c0.8,0.8,1.4,1.6,1.8,2.8c0.3,0.8,0.7,2.1,0.8,4.5
	                                c0.1,2.5,0.1,3.3,0.1,9.7c0,6.4,0,7.2-0.1,9.7c-0.1,2.3-0.5,3.6-0.8,4.5c-0.4,1.1-1,1.9-1.8,2.8c-0.8,0.8-1.6,1.4-2.8,1.8
	                                c-0.8,0.3-2.1,0.7-4.5,0.8c-2.5,0.1-3.3,0.1-9.7,0.1c-6.4,0-7.2,0-9.7-0.1c-2.3-0.1-3.6-0.5-4.5-0.8c-1.1-0.4-1.9-1-2.8-1.8
	                                c-0.8-0.8-1.4-1.6-1.8-2.8C5,37.3,4.6,36,4.5,33.7c-0.1-2.5-0.1-3.3-0.1-9.7c0-6.4,0-7.2,0.1-9.7C4.6,12,5,10.7,5.3,9.8
	                                c0.4-1.1,1-1.9,1.8-2.8c0.8-0.8,1.6-1.4,2.8-1.8C10.7,5,12,4.6,14.3,4.5C16.8,4.3,17.6,4.3,24,4.3z M24,11.7
	                                c-6.8,0-12.3,5.5-12.3,12.3c0,6.8,5.5,12.3,12.3,12.3c6.8,0,12.3-5.5,12.3-12.3C36.3,17.2,30.8,11.7,24,11.7z M24,32
	                                c-4.4,0-8-3.6-8-8c0-4.4,3.6-8,8-8c4.4,0,8,3.6,8,8C32,28.4,28.4,32,24,32z M39.7,11.2c0,1.6-1.3,2.9-2.9,2.9
	                                c-1.6,0-2.9-1.3-2.9-2.9s1.3-2.9,2.9-2.9C38.4,8.3,39.7,9.6,39.7,11.2z" />
	                  </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en" title="Twitter">
										<svg x="0px" y="0px" viewBox="0 0 48 48">
	                    <path id="Twitter" d="M48,8.7c-1.8,0.8-3.7,1.3-5.7,1.6c2-1.2,3.6-3.2,4.3-5.6c-1.9,1.2-4,2-6.3,2.4c-1.8-2-4.4-3.2-7.2-3.2
	                                c-5.4,0-9.8,4.5-9.8,10.1c0,0.8,0.1,1.6,0.3,2.3C15.5,16,8.2,12,3.3,5.8C2.5,7.3,2,9.1,2,10.9c0,3.5,1.7,6.6,4.4,8.4
	                                c-1.6,0-3.1-0.5-4.5-1.3v0.1c0,4.9,3.4,9,7.9,9.9c-0.8,0.2-1.7,0.4-2.6,0.4c-0.6,0-1.3-0.1-1.9-0.2c1.3,4,4.9,6.9,9.2,7
	                                C11.2,38,7,39.6,2.3,39.6c-0.8,0-1.6,0-2.3-0.1C4.4,42.3,9.5,44,15.1,44c18.1,0,28-15.4,28-28.7c0-0.4,0-0.9,0-1.3
	                                C45,12.5,46.7,10.8,48,8.7" />
	                  </svg>
                  </a>
                </li>
              </ul>
            </nav>

            {/* Site Overlay */}
            <div className="site-overlay" />

          </div>
        );
    }
};
