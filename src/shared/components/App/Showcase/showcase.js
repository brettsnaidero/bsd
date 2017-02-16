import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

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
							<section className="work-banner">
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
