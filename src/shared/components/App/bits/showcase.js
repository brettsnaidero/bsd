import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import { Motion, spring } from 'react-motion';

import ShowcaseItem from './showcase-item';

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

				{/* Shapes */}
				{/* Shape 31 */}
				<div className="shape shape-31">
					<div className="shape-center">
						<div className="shape-float">
							<svg id="shape-31" viewBox="0 0 68.6 21.3" width="68.6" height="21.3">
								<path className="line" d="M4.5 16.8C21 .4 47.6.4 64.1 16.8" />
								<ellipse className="circle" transform="rotate(-45.001 4.5 16.838)" cx="4.5" cy="16.8" rx="4.5" ry="4.5"/>
							</svg>
						</div>
					</div>
				</div>
				{/* Shape 39 */}
				<div className="shape shape-39">
					<div className="shape-center">
						<div className="shape-spin">
							<svg id="shape-39" viewBox="0 0 21.9 21.9" width="21.9" height="21.9">
								<path d="M2.5 16.4V5.5c0-1.7 1.3-3 3-3h10.9c1.7 0 3 1.3 3 3v10.9c0 1.7-1.3 3-3 3H5.5c-1.7 0-3-1.4-3-3z" className="lined-pink"/>
							</svg>
						</div>
					</div>
				</div>
				{/* Shape 35 */}
				<div className="shape shape-35">
					<div className="shape-center">
						<div className="shape-spin">
							<svg id="shape-35" viewBox="0 0 47.9 47.9" width="47.9" height="47.9">
								<path className="st0" d="M45.9 47.9H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h43.9c1.1 0 2 .9 2 2v43.9c0 1.1-.9 2-2 2z"/>
							</svg>
						</div>
					</div>
				</div>
				{/* Shape 17 */}
				<div className="shape shape-17">
					<div className="shape-center">
						<div className="shape-spin">
							<svg id="shape-17" viewBox="0 0 14.1 14.1" width="14.1" height="14.1">
								<path className="st0" d="M13.4 10l-1.3-1.3c-.9-.9-.9-2.4 0-3.3l1.3-1.3c.9-.9 1-2.4.2-3.3-.9-1-2.5-1-3.4-.1L8.7 2.1c-.9.9-2.4.9-3.3 0L4.1.8C3.2-.1 1.7-.2.8.6c-1 .9-1 2.5-.1 3.4l1.4 1.4c.9.9.9 2.4 0 3.3L.8 10c-.9.9-1 2.4-.2 3.3.9 1 2.5 1 3.4.1L5.4 12c.9-.9 2.4-.9 3.3 0l1.4 1.4c.9.9 2.5.9 3.4-.1.9-.9.8-2.4-.1-3.3z"/>
							</svg>
						</div>
					</div>
				</div>
				{/* Shape 16 */}
				<div className="shape shape-16">
					<div className="shape-center">
						<div className="shape-spin">
							<svg id="shape-16" viewBox="0 0 39.3 33" width="39.3" height="33">
								<path className="st0" d="M23.1.7L.5 27.9c-1.1 1.3-.2 3.2 1.4 3.3L37.2 33c1.5.1 2.5-1.4 1.9-2.8l-12.7-29c-.5-1.4-2.3-1.6-3.3-.5z"/>
							</svg>
						</div>
					</div>
				</div>
            </div>

          </section>
        );
    }
};
