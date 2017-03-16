import React, { Component } from 'react';

// Utils
import * as _ from "lodash";

// App
export default class HomeShapes extends Component {
	constructor(props) {
        super(props);

        this.state = {

        }
    }

	componentDidMount() {
	}

	render() {
        return (
          <div>

			{/* Shape 1 */}
			<div className="shape shape-1">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-01" viewBox="0 0 53 53" width="53" height="53">
							<defs>
								<linearGradient id="gradient-pink">
									<stop offset="0" stopColor="#df0b93"/>
									<stop offset="1" stopColor="#a00ab5"/>
								</linearGradient>
								<linearGradient id="gradient-normal">
							        <stop offset="0" stopColor="#2c41ff"/>
							        <stop offset="1" stopColor="#2508f9"/>
							    </linearGradient>
								<linearGradient id="gradient-high">
							        <stop offset="0" stopColor="#2c41ff" stopOpacity="1" />
							        <stop offset="1" stopColor="#2c41ff" stopOpacity="0.25" />
							    </linearGradient>
							</defs>
							<path className="st0" d="M51 53H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h49c1.1 0 2 .9 2 2v49c0 1.1-.9 2-2 2z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 2 */}
			<div className="shape shape-2">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-02" viewBox="0 0 14.1 14.1" width="14.1" height="14.1">
							<path className="st0" d="M13.4 10l-1.3-1.3c-.9-.9-.9-2.4 0-3.3l1.3-1.3c.9-.9 1-2.4.2-3.3-.9-1-2.5-1-3.4-.1L8.7 2.1c-.9.9-2.4.9-3.3 0L4.1.8C3.2-.1 1.7-.2.8.6c-1 .9-1 2.5-.1 3.4l1.4 1.4c.9.9.9 2.4 0 3.3L.8 10c-.9.9-1 2.4-.2 3.3.9 1 2.5 1 3.4.1L5.4 12c.9-.9 2.4-.9 3.3 0l1.4 1.4c.9.9 2.5.9 3.4-.1.9-.9.8-2.4-.1-3.3z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 4 */}
			<div className="shape shape-4">
				<div className="shape-center">
					<svg id="shape-04" viewBox="0 0 8.9 8.9" width="8.9" height="8.9">
						<circle className="st0" cx="4.5" cy="4.5" r="4.5"/>
					</svg>
				</div>
			</div>

			{/* Shape 5 */}
			<div className="shape shape-5">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-05" viewBox="0 0 37.3 37.3" width="37.3" height="37.3">
							<path className="lined-nograd" d="M18.7 25.3v10M18.7 2v10M2 18.7h10M25.3 18.7h10"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 6 */}
			<div className="shape shape-6">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-06" viewBox="0 0 10.3 10.3" width="10.3" height="10.3">
							<path className="st0" d="M0 0h10.3v10.3H0z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 7 */}
			<div className="shape shape-7">
				<div className="shape-center">
					<svg id="shape-07" viewBox="0 0 37.3 37.3" width="37.3" height="37.3">
						<circle className="st0" cx="18.7" cy="18.7" r="18.7"/>
					</svg>
				</div>
			</div>

			{/* Shape 8 */}
			<div className="shape shape-8">
				<div className="shape-center">
					<svg id="shape-08" viewBox="0 0 22.5 22.5" width="22.5" height="22.5">
						<circle className="st0" cx="11.3" cy="11.3" r="11.3"/>
					</svg>
				</div>
			</div>

			{/* Shape 9 */}
			<div className="shape shape-9">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-09" viewBox="0 0 9.8 9.8" width="9.8" height="9.8">
							<path className="st0" d="M0 0h9.8v9.8H0z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 10 */}
			<div className="shape shape-10">
				<div className="shape-center">
					<svg id="shape-10" viewBox="0 0 19.8 19.8" width="19.8" height="19.8">
						<circle className="st0" cx="9.9" cy="9.9" r="9.9"/>
					</svg>
				</div>
			</div>

			{/* Shape 11 */}
			<div className="shape shape-11">
				<div className="shape-center">
					<svg id="shape-11" viewBox="0 0 68.6 21.3" width="68.6" height="21.3">
						<path className="line" d="M64.1 4.5C47.6 21 21 21 4.5 4.5" />
						<ellipse className="circle" transform="rotate(-45.001 64.074 4.5)" cx="64.1" cy="4.5" rx="4.5" ry="4.5"/>
					</svg>
				</div>
			</div>

			{/* Shape 12 */}
			<div className="shape shape-12">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-12" viewBox="0 0 54.4 27.3" width="54.4" height="27.3">
							<path className="st0" d="M52.4 0H2C.8 0-.1 1 0 2.2c1.1 14.1 12.9 25.1 27.2 25.1 14.3 0 26.1-11.1 27.2-25.1.1-1.2-.8-2.2-2-2.2z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 13 */}
			<div className="shape shape-13">
				<div className="shape-center">
					<svg id="shape-13" viewBox="0 0 23.1 23.1" width="23.1" height="23.1">
						<circle cx="11.6" cy="11.6" r="9.1" className="lined-pink"/>
					</svg>
				</div>
			</div>

			{/* Shape 14 */}
			<div className="shape shape-14">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-14" viewBox="0 0 22.9 22.9" width="22.9" height="22.9">
							<path className="lined-nograd" d="M20.9 2L2 20.9M2 2l18.9 18.9"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 15 */}
			<div className="shape shape-15">
				<div className="shape-center">
					<svg id="shape-15" viewBox="0 0 10.4 10.4" width="10.4" height="10.4">
						<circle className="st0" cx="5.2" cy="5.2" r="5.2"/>
					</svg>
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

			{/* Shape 18 */}
			<div className="shape shape-18">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-18" viewBox="0 0 48.8 48.8" width="48.8" height="48.8">
							<path className="st0" d="M48.8 2v44.8c0 1.1-.9 2-2 2H2c-1.1 0-2-.9-2-2V2C0 .9.9 0 2 0h44.8c1.1 0 2 .9 2 2z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 19 */}
			<div className="shape shape-19">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-19" viewBox="0 0 27.6 27.6" width="27.6" height="27.6">
							<path className="lined-nograd" d="M9.1 18.5L2 25.6M25.6 2l-7.1 7.1M2 2l7.1 7.1M18.5 18.5l7.1 7.1"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 20 */}
			<div className="shape shape-20">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-20" viewBox="0 0 9.7 9.7" width="9.7" height="9.7">
							<path className="st0" d="M8.4.1L2.6 2c-.3.1-.5.3-.6.6L.1 8.4c-.3.8.5 1.5 1.3 1.3l5.8-1.9c.3-.1.5-.3.6-.6l1.9-5.8C9.9.5 9.1-.2 8.4.1z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 21 */}
			<div className="shape shape-21">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-21" viewBox="0 0 34.8 34.8" width="34.8" height="34.8">
							<path className="lined-nograd" d="M17.4 2v30.8M2 17.4h30.8"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 22 */}
			<div className="shape shape-22">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-22" viewBox="0 0 24.6 24.6" width="24.6" height="24.6">
							<path d="M7.8 3.9L2.6 19.5c-.5 1.6 1 3.1 2.5 2.5l15.6-5.2c1.4-.5 1.8-2.3.8-3.3L11.1 3.1c-1-1.1-2.8-.6-3.3.8z" className="lined-pink"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 23 */}
			<div className="shape shape-23">
				<div className="shape-center">
					<svg id="shape-23" viewBox="0 0 8.9 8.9" width="8.9" height="8.9">
						<circle className="st0" cx="4.4" cy="4.4" r="4.4"/>
					</svg>
				</div>
			</div>

			{/* Shape 24 */}
			<div className="shape shape-24">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-24" viewBox="0 0 18 18" width="18" height="18">
							<path className="st0" d="M15.6 6.7h-1.8c-1.3 0-2.4-1.1-2.4-2.4V2.5c0-1.3-1-2.4-2.2-2.5-1.4-.1-2.5 1-2.5 2.4v2c0 1.3-1.1 2.4-2.4 2.4H2.5C1.2 6.8.1 7.8 0 9c-.1 1.4 1 2.5 2.3 2.5h2c1.3 0 2.4 1.1 2.4 2.4v1.8c0 1.3 1 2.4 2.2 2.5 1.4.1 2.5-1 2.5-2.3v-2c0-1.3 1.1-2.4 2.4-2.4h2c1.3 0 2.4-1.1 2.3-2.5-.1-1.4-1.3-2.3-2.5-2.3z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 25 */}
			<div className="shape shape-25">
				<div className="shape-center">
					<svg id="shape-25" viewBox="0 0 22.4 22.4" width="22.4" height="22.4">
						<circle className="st0" cx="11.2" cy="11.2" r="11.2"/>
					</svg>
				</div>
			</div>

			{/* Shape 26 */}
			<div className="shape shape-26">
				<div className="shape-center">
					<svg id="shape-26" viewBox="0 0 7.4 7.4" width="7.4" height="7.4">
						<circle className="st0" cx="3.7" cy="3.7" r="3.7"/>
					</svg>
				</div>
			</div>

			{/* Shape 27 */}
			<div className="shape shape-27">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-27" viewBox="0 0 35.5 35.5" width="35.5" height="35.5">
							<path className="st0" d="M27.8.6L.6 27.8c-.8.8-.8 2.2.1 3 8.4 6.8 20.8 6.4 28.6-1.5 7.8-7.8 8.3-20.2 1.5-28.6-.8-.9-2.2-.9-3-.1z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 28 */}
			<div className="shape shape-28">
				<div className="shape-center">
					<svg id="shape-28" viewBox="0 0 16.9 16.9" width="16.9" height="16.9">
						<circle className="st0" cx="8.4" cy="8.4" r="8.4"/>
					</svg>
				</div>
			</div>

			{/* Shape 29 */}
			<div className="shape shape-29">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-29" viewBox="0 0 30.9 30.9" width="30.9" height="30.9">
							<path d="M26.4 28.4H4.5c-1.1 0-2-.9-2-2V4.5c0-1.1.9-2 2-2h21.9c1.1 0 2 .9 2 2v21.9c0 1.1-.9 2-2 2z" className="lined-normal"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 30 */}
			<div className="shape shape-30">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-30" viewBox="0 0 14.1 14.1" width="14.1" height="14.1">
							<path className="st0" d="M13.4 10l-1.3-1.3c-.9-.9-.9-2.4 0-3.3l1.3-1.3c.9-.9 1-2.4.2-3.3-.9-1-2.5-1-3.4-.1L8.7 2.1c-.9.9-2.4.9-3.3 0L4.1.8C3.2-.1 1.7-.2.8.6c-1 .9-1 2.5-.1 3.4l1.4 1.4c.9.9.9 2.4 0 3.3L.8 10c-.9.9-1 2.4-.2 3.3.9 1 2.5 1 3.4.1L5.4 12c.9-.9 2.4-.9 3.3 0l1.4 1.4c.9.9 2.5.9 3.4-.1.9-.9.8-2.4-.1-3.3z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 31 */}
			<div className="shape shape-31">
				<div className="shape-center">
					<svg id="shape-31" viewBox="0 0 68.6 21.3" width="68.6" height="21.3">
						<path className="line" d="M4.5 16.8C21 .4 47.6.4 64.1 16.8" />
						<ellipse className="circle" transform="rotate(-45.001 4.5 16.838)" cx="4.5" cy="16.8" rx="4.5" ry="4.5"/>
					</svg>
				</div>
			</div>

			{/* Shape 32 */}
			<div className="shape shape-32">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-32" viewBox="0 0 37.5 37.5" width="37.5" height="37.5">
							<path className="st0" d="M11.3 1.4L.1 34.9c-.5 1.6 1 3.1 2.5 2.5l33.5-11.2c1.4-.5 1.8-2.3.8-3.3L14.6.6c-1.1-1.1-2.8-.6-3.3.8z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 33 */}
			<div className="shape shape-33">
				<div className="shape-center">
					<svg id="shape-33" viewBox="0 0 56.8 56.8" width="28.4" height="28.4">
						<circle className="st0" cx="28.4" cy="28.4" r="28.4"/>
					</svg>
				</div>
			</div>

			{/* Shape 34 */}
			<div className="shape shape-34">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-34" viewBox="0 0 9.8 9.8" width="9.8" height="9.8">
							<path className="st0" d="M0 0h9.8v9.8H0z"/>
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

			{/* Shape 36 */}
			<div className="shape shape-36">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-36" viewBox="0 0 9.7 9.7" width="9.7" height="9.7">
							<path className="st0" d="M8.4.1L2.6 2c-.3.1-.5.3-.6.6L.1 8.4c-.3.8.5 1.5 1.3 1.3l5.8-1.9c.3-.1.5-.3.6-.6l1.9-5.8C9.9.5 9.1-.2 8.4.1z"/>
						</svg>
					</div>
				</div>
			</div>

			{/* Shape 37 */}
			<div className="shape shape-37">
				<div className="shape-center">
					<svg id="shape-37" viewBox="0 0 49.8 49.8" width="49.8" height="49.8">
						<circle cx="24.9" cy="24.9" r="22.4" className="lined-normal"/>
					</svg>
				</div>
			</div>

			{/* Shape 38 */}
			<div className="shape shape-38">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-38" viewBox="0 0 32 32" width="32" height="32">
							<path className="lined-nograd" d="M16 2v28M2 16h28"/>
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

			{/* Shape 40 */}
			<div className="shape shape-40">
				<div className="shape-center">
					<svg id="shape-40" viewBox="0 0 54.4 54.4" width="54.4" height="54.4">
						<circle className="st0" cx="27.2" cy="27.2" r="27.2"/>
					</svg>
				</div>
			</div>

			{/* Shape 41 */}
			<div className="shape shape-41">
				<div className="shape-center">
					<div className="shape-spin">
						<svg id="shape-41" viewBox="0 0 9 16" width="9" height="16">
							<path className="st0" d="M3.6.6l-3.5 7c-.1.2-.1.6 0 .8l3.5 7c.4.7 1.4.7 1.8 0l3.5-7c.1-.2.1-.6 0-.9L5.4.5C5-.2 4-.2 3.6.6z"/>
						</svg>
					</div>
				</div>
			</div>

          </div>
        );
    }
};
