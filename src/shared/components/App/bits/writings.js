import React, { Component } from 'react';
import { Link } from 'react-router';

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

	}

	render() {
        return (
          <section className="home-writings" id="writings">
            {/* Shapes */}
			<Shapes />

			<div className="row">

				<div className="writings-list">
					<Link to="/writings/id">
						New Site Vibes
						<sup>
							<time datetime="August 1, 2016" className="Date">AUG ‘16</time>
						</sup>
						<span className="Slash"></span>
					</Link>
					<a href="#" data-color_from="#2BC0E4" data-color_to="#EAECC6" className="IndexLink">
						How to protect your online communications
						<sup>
							<time datetime="November 20, 2016" className="Date">NOV ‘16</time>
						</sup>
						<span className="Slash"></span>
					</a>
					<a href="/articles/on-brand" data-color_from="#FF8008" data-color_to="#FFC837" className="IndexLink">
						A comprehensive and encyclopedic guide to using NPM, Gulp, and SASS!
						<sup>
							<time datetime="August 1, 2016" className="Date">AUG ‘16</time>
						</sup>
						<span className="Slash"></span>
					</a>
					<a href="#" data-color_from="#2BC0E4" data-color_to="#EAECC6" className="IndexLink">
						A Complete Guide To Implementing An SVG Icon System
						<sup>
							<time datetime="November 20, 2016" className="Date">NOV ‘16</time>
						</sup>
						<span className="Slash"></span>
					</a>
					<a href="/articles/on-brand" data-color_from="#FF8008" data-color_to="#FFC837" className="IndexLink">
						Deciding to Design in the Browser
						<sup>
							<time datetime="August 1, 2016" className="Date">AUG ‘16</time>
						</sup>
						<span className="Slash"></span>
					</a>
					<a href="#" data-color_from="#2BC0E4" data-color_to="#EAECC6" className="IndexLink">
						How to protect your online communications
						<sup>
							<time datetime="November 20, 2016" className="Date">NOV ‘16</time>
						</sup>
						<span className="Slash"></span>
					</a>
					<a href="/articles/on-brand" data-color_from="#FF8008" data-color_to="#FFC837" className="IndexLink">
						On Brand
						<sup>
							<time datetime="August 1, 2016" className="Date">AUG ‘16</time>
						</sup>
						<span className="Slash"></span>
					</a>
				</div>

				<div>

				</div>

			</div>

          </section>

        );
    }
};
