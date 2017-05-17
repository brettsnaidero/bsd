import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

// Utils
import * as _ from "lodash";

import MobileNav from "./mobile-nav";

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

	toggleMobileMenu() {
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
				nothome={this.props.nothome}
			/>

            {/* Header */}
            <div className="header-holder">
              <header
				id="header"
				className={this.props.theme}
				>
                <Link to="/" className="logo">
					<svg viewBox="0 0 60 60">
						{/*
						<defs>
					        <linearGradient id="gradient">
					          <stop offset="0%" stop-color="#692ec8" />
					          <stop offset="100%" stop-color="#2f1ca8" />
					        </linearGradient>
					    </defs>
						*/}
						<path className="shape" d="M52.4,25.7l-8.5-8.5l1.4-1.4c2.4-2.4,2.4-6.2,0-8.5L41,3l-5.7,5.7l0,0C30.6,4,23,4,18.3,8.7L4.1,22.9l17.1,17.1l-4.3,4.3
		c-2.4,2.4-2.4,6.2,0,8.5l4.3,4.3l8.5-8.5l8.5,8.5l14.2-14.2C57.1,38.1,57.1,30.4,52.4,25.7z"/>
						<path className="line" d="M21.1,39.9L4.1,22.9L18.3,8.7C23,4,30.6,4,35.3,8.7"/>
						<path className="line" d="M43.9,17.2l8.5,8.5c4.7,4.7,4.7,12.3,0,17.1L38.2,57l-8.5-8.5"/>
						<path className="line" d="M52.4,25.7L21.1,57l-4.3-4.3c-2.4-2.4-2.4-6.2,0-8.5l27-27"/>
						<path className="line" d="M12.6,31.4L41,3l4.3,4.3c2.4,2.4,2.4,6.2,0,8.5l-1.4,1.4"/>
					</svg>
                </Link>
                <nav className="main-nav">
					{ this.props.nothome ? (
                  <ul>
                    <li>
						<NavLink to="/#profile">Profile</NavLink>
					</li>
					<li>
						<NavLink to="/#work">Work</NavLink>
					</li>
                    <li>
						<NavLink to="/#writing">Writing</NavLink>
					</li>
                  </ul>
						) : (
					<ul>
						<li>
							<LocalLink activeClass="active" to="profile" spy={true} smooth={true} offset={50} duration={500}>Profile</LocalLink>
						</li>
						<li>
							<LocalLink activeClass="active" to="work" spy={true} smooth={true} offset={50} duration={500}>Work</LocalLink>
						</li>
						<li>
							<LocalLink activeClass="active" to="writing" spy={true} smooth={true} offset={50} duration={500}>Writing</LocalLink>
						</li>
					</ul>
				)}
                </nav>
                <div className="c2a">
					{ this.props.nothome ? (
						<Link to="/#contact">
							<svg viewBox="0 0 130 70" width="130" height="70">
							  <rect className="bottom" x="5" y="5" rx="10" ry="10" width="120" height="60" />
								<rect className="top" x="5" y="5" rx="10" ry="10" width="120" height="60" />
							</svg>
							Let&rsquo;s chat!
						</Link>
					) : (
						<LocalLink activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>
							<svg viewBox="0 0 130 70" width="130" height="70">
							  <rect className="bottom" x="5" y="5" rx="10" ry="10" width="120" height="60" />
								<rect className="top" x="5" y="5" rx="10" ry="10" width="120" height="60" />
							</svg>
							Let’s chat!
						</LocalLink>
					)}
                  <button className={"menu-btn" + (this.state.mobileMenuActive ? " open" : "")} onClick={ () => this.toggleMobileMenu() }>
                    Menu
					<div className="icon">
                      <span />
                      <span />
                      <span />
					  <span />
                    </div>
                  </button>
                </div>
              </header>
            </div>
          </div>
        );
    }
};
