import React, { Component } from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from 'lodash';

import Shapes from './shapes';
import blogItems from '../data/blog-items';

// App
export default class Writings extends Component {
	constructor(props) {
        super(props);

        this.state = {
					blogList: {}
        }
    }

	componentDidMount() {
			this.setState({
				blogList: blogItems
			})
	}

	moveBlog(selected) {
		console.log(selected);
		let keys = Object.keys(this.state.blogList);
		let location = keys.indexOf(selected);
		console.log(keys);
	}

	render() {
        return (
          <section className="home-writings" id="writings">
            {/* Shapes */}
						<Shapes />

						<div>
							<div className="row">

								{/* Image */}
								<div className="image-holder">
									{ blogItems.map( (item) => (
										<div className="slide" style={{ backgroundImage: 'url(' + item.img + ')' }}></div>
									))}
								</div>

								<ul className="writings-list">
									{/* Links */}
									{ blogItems.map( (item) => (
										<li onClick={() => this.moveBlog(item.id) }>
											{/* <Link to="/writings/uxofasandwich"> */}
												{ item.title }
												<sup>
													<time className="Date">AUG ‘16</time> {/* datetime="August 1, 2016" */}
												</sup>
												<span className="Slash"></span>
											{/* </Link> */}
										</li>
									))}
								</ul>

							</div>
						</div>

          </section>

        );
    }
};
