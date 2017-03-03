import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import blogItems from '../data/blog-items.js';
import Header from '../bits/header';

import '../sass/highlight.scss';

export default class WritingsPage extends Component {
	constructor(props) {
		super(props);

		this.state = {
			page: {},
			visibility: {
				bannertext: false,
				maintext: false
			}
		}
	}

	componentDidMount() {
		// Scroll to top on load
		window.scrollTo(0,0);
	}

	componentWillMount() {
		let page = _.find(blogItems, {'id': this.props.params.id});
		this.setState({
			page: page
		})
	}

	render() {
		return (
			<div>
				<Header nothome={true} />

				<section className="blog-page">
					<article className="Article Page">
						<h1>{this.state.page.title}</h1>
						<time>August 10, 2014</time>
						{this.state.page.content}
					</article>
				</section>
			</div>
		);
    }
};
