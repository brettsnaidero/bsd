import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

import showcaseItems from '../data/showcase-items.js';

export default class WorkPage extends Component {
	constructor(props) {
        super(props);
    }

	componentDidMount() {

	}

	render() {
        return (
            <div>
				{/* Banner */}
				<section
				className="work-banner"
				style={{
					backgroundImage: 'url(../img/example.jpg)'
				}}>
					<div className="row">
						<div className="text">
							<div className="client">Client: Myself!</div>
							<h1>For the common good</h1>
							<p>Project: Visual Identity, Website, Interior<br />Unit: e-Types Daily, e-Types Digital, e-Types Studio, Playtype</p>
						</div>
					</div>
				</section>
				{/* Content */}
				<section className="work-content">
					<div className="row">
						<div className="text">
							<div className="client">Client: Myself!</div>
							<h1>For the common good</h1>
							<p>Project: Visual Identity, Website, Interior<br />Unit: e-Types Daily, e-Types Digital, e-Types Studio, Playtype</p>
						</div>
					</div>
				</section>
				{/* Images */}
				<section className="work-images">
					<div className="row">
						<div className="text">
							<div className="client">Client: Myself!</div>
							<h1>For the common good</h1>
							<p>Project: Visual Identity, Website, Interior<br />Unit: e-Types Daily, e-Types Digital, e-Types Studio, Playtype</p>
						</div>
					</div>
				</section>
            </div>
        );
    }
};
