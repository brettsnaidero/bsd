import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

// Components
import Intro from '../bits/intro';
import Profile from '../bits/profile';
import Showcase from '../bits/showcase';
import Writings from '../bits/writings';
import Contact from '../bits/contact';

export default class Home extends Component {
	constructor(props) {
        super(props);
    }

	componentDidMount() {
		this.parallax();
		
		// Call SVG4Everybody
		svg4everybody();

		// Debounce
		function debounce(func, wait, immediate) {
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
		};

		// Header stick
		let headerEl = document.querySelector('#header');
		let bodyEl = document.querySelector('body');
		$(window).on('scroll', debounce( function(e) {
			// Sticky header
			if (bodyEl.scrollTop > 300) {
			  headerEl.classList.add('stuck');
			} else {
			  headerEl.classList.remove('stuck');
			};
		}, 100));

		// Toggler
		var togglerElements = document.querySelectorAll('.toggler');
		Array.from(togglerElements).forEach(function(item) {
		    var attr = item.getAttribute('data-toggleplz');
		    var toggleMe = document.getElementById(attr);
		    item.addEventListener('click', function(event) {
		        event.preventDefault;
		        item.classList.toggle('toggled');
		        toggleMe.classList.toggle('show');
		    });
		});
	}

	parallax() {
		// init controller
		var controller = new ScrollMagic.Controller();

		// create a scene
		var tween = new TimelineMax ()
			.add([
		    // Squiggle 1
				TweenMax.fromTo("#parallaxText .layer1", 1, {
		      scale: 1, autoAlpha: 1, top: 75 + "%"
		    }, {
		      top: 95 + "%", ease: Linear.easeNone
		    }),
		    // Squiggle 2
				TweenMax.fromTo("#parallaxText .layer2", 1, {
		      scale: 1, autoAlpha: 1, top: 55 + "%"
		    }, {
		      top: 75 + "%", ease: Linear.easeNone
		    }),
		    // Cross
				TweenMax.fromTo("#parallaxText .layer3", 1, {
		      scale: 1, autoAlpha: 1, top: 30 + "%"
		    }, {
		      top: 50 + "%", ease: Linear.easeNone
		    }),
		    // Triangle
				TweenMax.fromTo("#parallaxText .layer4", 1, {
		      scale: 1, autoAlpha: 1, top: 85 + "%"
		    }, {
		      top: 105 + "%", ease: Linear.easeNone
		    }),
		    // Semicircle
				TweenMax.fromTo("#parallaxText .layer5", 1, {
		      scale: 1, autoAlpha: 1, top: 20 + "%"
		    }, {
		      top: 40 + "%", ease: Linear.easeNone
		    }),
		    // Circle
				TweenMax.fromTo("#parallaxText .layer6", 1, {
		      scale: 1, autoAlpha: 1, top: 40 + "%"
		    }, {
		      top: 60 + "%", ease: Linear.easeNone
		    })
			]);

		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#trigger", duration: $(window).height()})
			.setTween(tween)
			// .addIndicators()
			.addTo(controller);
	}

	render() {
        return (
            <div>
							<Intro />
							<Profile />
							<Showcase />
							<Writings />
							<Contact />
            </div>
        );
    }
};
