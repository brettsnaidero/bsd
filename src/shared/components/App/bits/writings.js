import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import Shapes from './shapes';

// App
export default class Writings extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {
		// Home writing slideshow
    $('.slick-responsive').slick({
    	slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        slide: '.slide',
        speed: 500,
        dots: true,
        arrows: true,
        draggable: true,
        centerMode: true,
        centerPadding: '400px',
        slidesToShow: 1,
        customPaging : function(slider, i) {
      	  var thumb = $(slider.$slides[i]).data('thumb');
      	  return '<span style="background-image:url('+thumb+');"></span>';
        },
        appendDots: '.apartments-gallery-controls',
        appendArrows: '.apartments-gallery',
        prevArrow: '<span class="slick-prev"></span>',
        nextArrow: '<span class="slick-next"></span>',
        responsive: [
      	  {
      		breakpoint: 1601,
      		settings: {
      		  centerPadding: '320px'
      		}
      	  },
      	  {
      		breakpoint: 769,
      		settings: {
      		  centerPadding: '200px'
      		}
      	  },
      	  {
      		breakpoint: 481,
      		settings: {
      		  centerMode: false,
      		  customPaging : function(slider) {
      			  return '<span></span>';
      		  }
      		}
      	  }
        ]
    });
	}

	render() {
        return (
          <section className="home-writings" id="writings">
            {/* Shapes */}
			<Shapes />
			
            {/* Content */}
            <div className="iseeyou">
              <div id="apartment-123" className="apartments-gallery gallery slick-responsive">
                <div className="slide" data-thumb="img/big.png">
                  <div className="image" style={{backgroundImage: 'url("img/example.jpg")'}} />
                  <a href="#" title="Title" className="mask">
                    <div className="overlay">
                      <div className="title">
                        <div className="main">
                          <span className="line"><span className="inner">A comprehensive guide </span></span>
                          <span className="line"><span className="inner">to using SASS!</span></span>
                        </div>
                        <div className="date">
                          <span className="inner">12th October, 2017</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="slide" data-thumb="img/big.png">
                  <div className="image" style={{backgroundImage: 'url("img/example.jpg")'}} />
                  <a href="#" title="Title" className="mask">
                    <div className="overlay">
                      <div className="title">
                        <div className="main">
                          <span className="line"><span className="inner">A comprehensive guide </span></span>
                          <span className="line"><span className="inner">to using SASS!</span></span>
                        </div>
                        <div className="date">
                          <span className="inner">12th October, 2017</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="slide" data-thumb="img/big2.png">
                  <div className="image" style={{backgroundImage: 'url("img/example.jpg")'}} />
                  <a href="#" title="Title" className="mask">
                    <div className="overlay">
                      <div className="title">
                        <div className="main">
                          <span className="line"><span className="inner">A comprehensive guide </span></span>
                          <span className="line"><span className="inner">to using SASS!</span></span>
                        </div>
                        <div className="date">
                          <span className="inner">12th October, 2017</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>

        );
    }
};
