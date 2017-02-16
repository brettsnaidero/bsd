import React, { Component } from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from "lodash";

import MobileNav from "./mobile-nav";

// import Logo from "../img/logo.svg";

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
											<Link to="/#profile">Profile</Link>
										</li>
                    <li>
											<Link to="/#work">Work</Link>
										</li>
                    <li>
											<Link to="/#writings">Writing</Link>
										</li>
                  </ul>
                </nav>
                <div className="c2a">
                  <Link to="/#contact" title="Contact">Let’s chat!</Link>
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
