import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

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
                    <svg>
                      <use href="img/icons.svg#instagram">
                      </use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/?lang=en" title="Twitter">
                    <svg>
                      <use href="img/icons.svg#twitter">
                      </use>
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
