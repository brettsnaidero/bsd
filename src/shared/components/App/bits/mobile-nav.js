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
                  <a href="#profile">Profile</a>
                </li>
                <li className="pushy-submenu pushy-submenu-closed">
                  <a href="#showcase">Work</a>
                </li>
                <li className="pushy-submenu pushy-submenu-closed">
                  <a href="#writings">Writing</a>
                </li>
								<li className="pushy-submenu pushy-submenu-closed">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
              {/* Social */}
              <ul className="social">
                <li>
                  <a href="#" title="Facebook">
                    <svg>
                      <use href="img/icons.svg#facebook">
                      </use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" title="Instagram">
                    <svg>
                      <use href="img/icons.svg#instagram">
                      </use>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" title="Twitter">
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
