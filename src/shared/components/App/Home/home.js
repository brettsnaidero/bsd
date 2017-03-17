import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

// Components
import Header from '../bits/header';
import Intro from '../bits/intro';
import Profile from '../bits/profile';
import Showcase from '../bits/showcase';
import Writings from '../bits/writings';
import Contact from '../bits/contact';
import Shapes from '../bits/shapes';

import Scroll from 'react-scroll';
const LocalLink  = Scroll.Link;
const Element    = Scroll.Element;
const Events     = Scroll.Events;
const scroll     = Scroll.animateScroll;
const scrollSpy  = Scroll.scrollSpy;

export default class Home extends Component {
	constructor(props) {
		super(props);
	}

	scrollLoad(hash) {
		const element = document.querySelector(hash);
		if (element) {
			const offset = document.getElementById(location.hash.slice(1)).getBoundingClientRect().top;
			scroll.scrollMore(offset);
		}
	}

	componentDidMount() {
		if (this.props.location.hash) {
			this.scrollLoad(this.props.location.hash);
		}

		// Scroll Events
		window.addEventListener('scroll', this.debounce(
			this.handleScroll.bind(this), 100
		));
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.debounce(
			this.handleScroll.bind(this), 100
		));
  }

	// Debounce
	debounce(func, wait, immediate) {
		var timeout;
		return function() {
			var context = this, args = arguments;
			var later = function() {
				timeout = null;
				if (!immediate) func.apply(context, args);
			};
			var callNow = immediate && !timeout;
			clearTimeout(timeout);
			timeout = setTimeout(later, wait);
			if (callNow) func.apply(context, args);
		};
	}

	handleScroll() {
		// Sticky header
		let headerEl = document.querySelector('#header');
		if (window.pageYOffset > 300) {
			headerEl.classList.add('stuck');
		} else {
			headerEl.classList.remove('stuck');
		};
	}

	render() {
        return (
            <div id="page">
							<Header nothome={false} theme="" />
							<Element name="intro" id="intro">
								<Intro />
							</Element>
							<div className="shape-holder">
								{/* <Shapes /> */}
								<Element name="profile" id="profile">
									<Profile />
								</Element>
								<Element name="work" id="work">
									<Showcase />
								</Element>
								<Element name="writing" id="writing">
									<Writings />
								</Element>
								<Element name="contact" id="contact">
									<Contact />
								</Element>
							</div>
            </div>
        );
    }
};
