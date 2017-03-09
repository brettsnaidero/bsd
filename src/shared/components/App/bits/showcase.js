import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import { Motion, spring } from 'react-motion';

import ShowcaseItem from './showcase-item';
import Shapes from './shapes';

import showcaseItems from '../data/showcase-items.js';

export default class Showcase extends Component {
	constructor(props) {
        super(props);

        this.state = {
			isModalActive: false,
			activeModal: 0,
			loadingModal: false,
			showcaseItems: showcaseItems
        }
    }

	componentDidMount() {

	}

	render() {
        return (
          <section className="work">

            {/* Shapes */}
			<Shapes />

			{/* Modal */}
			<Motion style={{
				x: ( this.state.isModalActive ? spring(1) : spring(0) )
			}}>
				{ ({x}) =>
					<div
						className={"modal-wrap"}
						ref="modal"
						style={{
							opacity: `${x}`
						}}
					/>
				}
			</Motion>

            {/* Content */}
			<div className="work-listings clearfix">
              <ul>
				{ this.state.showcaseItems.map( (item, index) => (
					<ShowcaseItem
						id={item.id}
						title={item.title}
						subtitle={item.subtitle}
						image={item.image}
						num={index}
						key={index}
						width={item.width}
						height={item.height}
						ref={index}

					/>
				))}
              </ul>
            </div>

          </section>
        );
    }
};
