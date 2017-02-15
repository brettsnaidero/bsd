import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import { Motion, spring } from 'react-motion';

import ShowcaseItem from './showcase-item';
import Shapes from './shapes';

// App
export default class Showcase extends Component {
	constructor(props) {
        super(props);

        this.state = {
					isModalActive: false,
					activeModal: 0,
					loadingModal: false,
					showcaseItems: [
						{
							title: "MMJ Real Estate",
							subtitle: "Real Estate Website",
							image: "img/work/mmj.png",
							width: 360,
							height: 450,
							content: (
								<div className="content">
									<h1>MMJ Real Estate</h1>
									<div className="what">Real Estate Website</div>
									<p>In an ultra-modern company with over 60 production and packaging lines Royal Herkel manufactures more than 1500 products for private labels and brands: from nutritional supplements to medical devices, from pharmaceutical products to cosmetics. Together with the client we created a flexible and royal website.</p>
									<div className="showcase-info">
										<div className="each">
											<div className="title">Period</div>
											<div className="answer">2017</div>
										</div>
										<div className="each">
											<div className="title">Client</div>
											<div className="answer">MMJ Real Estate</div>
										</div>
										<div className="each">
											<div className="title">Product</div>
											<div className="answer">Real Estate Site</div>
										</div>
									</div>
								</div>
							),
							imageList: [
								"img/work/iydj.jpg"
							]
						},
						{
							title: "Illawarra DJ",
							subtitle: "Entertainment Business",
							image: "img/work/iydj.jpg",
							width: 240,
							height: 320,
							content: (
								<div className="content">
									<h1>Illawarra DJ</h1>
									<div className="what">Business/Website</div>
									<p>In an ultra-modern company with over 60 production and packaging lines Royal Herkel manufactures more than 1500 products for private labels and brands: from nutritional supplements to medical devices, from pharmaceutical products to cosmetics. Together with the client we created a flexible and royal website.</p>
									<div className="showcase-info">
										<div className="each">
											<div className="title">Period</div>
											<div className="answer">2016</div>
										</div>
										<div className="each">
											<div className="title">Client</div>
											<div className="answer">Myself!</div>
										</div>
									</div>
								</div>
							),
							imageList: [
								"img/work/show-iydj.jpg"
							]
						},
						{
							title: "Bowser Browser",
							subtitle: "Cheap Petrol Finder",
							image: "img/work/bowser.jpg",
							width: 240,
							height: 320,
							content: (
								<div className="content">
									<h1>Bowser Browser</h1>
									<div className="what">Petrol Finder Web App</div>
									<p>In an ultra-modern company with over 60 production and packaging lines Royal Herkel manufactures more than 1500 products for private labels and brands: from nutritional supplements to medical devices, from pharmaceutical products to cosmetics. Together with the client we created a flexible and royal website.</p>
									<div className="showcase-info">
										<div className="each">
											<div className="title">Period</div>
											<div className="answer">2017</div>
										</div>
										<div className="each">
											<div className="title">Client</div>
											<div className="answer">Myself!</div>
										</div>
									</div>
								</div>
							),
							imageList: [
								"img/work/iydj.jpg"
							]
						},
						{
							title: "League & Legends",
							subtitle: "E-Commerce Website",
							image: "img/work/landl.jpg",
							width: 240,
							height: 320,
							content: (
								<div className="content">
									<h1>League &amp; Legends</h1>
									<div className="what">E-Commerce Website</div>
									<p>In an ultra-modern company with over 60 production and packaging lines Royal Herkel manufactures more than 1500 products for private labels and brands: from nutritional supplements to medical devices, from pharmaceutical products to cosmetics. Together with the client we created a flexible and royal website.</p>
									<div className="showcase-info">
										<div className="each">
											<div className="title">Period</div>
											<div className="answer">2017</div>
										</div>
										<div className="each">
											<div className="title">Client</div>
											<div className="answer">League &amp; Legends</div>
										</div>
									</div>
								</div>
							),
							imageList: [
								"img/work/show-landl.jpg",
								"img/work/show-landl2.jpg"
							]
						},
						{
							title: "Polidex",
							subtitle: "Politician Reference Site",
							image: "img/work/polidex.jpg",
							width: 240,
							height: 320,
							content: (
								<div className="content">
									<h1>Polidex</h1>
									<div className="what">Web App</div>
									<p>In an ultra-modern company with over 60 production and packaging lines Royal Herkel manufactures more than 1500 products for private labels and brands: from nutritional supplements to medical devices, from pharmaceutical products to cosmetics. Together with the client we created a flexible and royal website.</p>
									<div className="showcase-info">
										<div className="each">
											<div className="title">Period</div>
											<div className="answer">2017</div>
										</div>
										<div className="each">
											<div className="title">Client</div>
											<div className="answer">Myself!</div>
										</div>
									</div>
								</div>
							),
							imageList: [
								"img/work/show-polidex.png"
							]
						},
						{
							title: "KidzWish Australia",
							subtitle: "Charity Website",
							image: "img/work/kidzwish.jpg",
							width: 240,
							height: 320,
							content: (
								<div className="content">
									<h1>KidzWish Australia</h1>
									<div className="what">Charity Website</div>
									<p>In an ultra-modern company with over 60 production and packaging lines Royal Herkel manufactures more than 1500 products for private labels and brands: from nutritional supplements to medical devices, from pharmaceutical products to cosmetics. Together with the client we created a flexible and royal website.</p>
									<div className="showcase-info">
										<div className="each">
											<div className="title">Period</div>
											<div className="answer">2017</div>
										</div>
										<div className="each">
											<div className="title">Client</div>
											<div className="answer">KidzWish Australia</div>
										</div>
									</div>
								</div>
							),
							imageList: [
								"img/work/iydj.jpg",
								"img/work/iydj.jpg",
								"img/work/iydj.jpg"
							]
						}
					]
        }
    }

	componentDidMount() {

	}

	showItem(num) {
		this.openModal(num);
	}

	prevModal() {
			let newNum = 0;
			if(this.state.activeModal === 0) {
				newNum = (this.state.showcaseItems.length - 1);
			} else {
				newNum = this.state.activeModal - 1;
			}

			// Close image and show previous one
			this.refs[this.state.activeModal].toggle();
			this.refs[newNum].toggle();

			this.setState({
				activeModal: newNum
			});
	}

	nextModal() {
			let newNum = 0;
			if(this.state.activeModal === (this.state.showcaseItems.length - 1)) {
				newNum = 0;
			} else {
				newNum = this.state.activeModal + 1;
			}

			// Close image and show next one
			this.refs[this.state.activeModal].toggle();
			this.refs[newNum].toggle();

			this.setState({
				activeModal: newNum
			});
	}

	openModal(num) {
		this.setState({
			isModalActive: true,
			activeModal: num
		});

		document.documentElement.style.overflowY = 'hidden';
	}

	closeModal() {
		this.setState({
			isModalActive: false
		});

		// Close image
		this.refs[this.state.activeModal].toggle();

		document.documentElement.style.overflowY = 'initial';
	}

	render() {
        return (
          <section className="work" id="showcase">

            {/* Shapes */}
						<Shapes />

						{/* Modal */}
						<Motion style={{
							x: ( this.state.isModalActive ? spring(1) : spring(0) )
						}}>
						{ ({x}) =>
						<div
							className={"modal-wrap " + (this.state.isModalActive ? "active" : (x < 1 && x > 0 ? "loading" : "nope" ))}
							ref="modal"
							style={{
								// opacity: `${x}`
							}}
						>
							<div className="modal">
								<div className="modal-content">
									<div className={"mod " + (this.state.isModalActive ? "active" : "nope")}></div>
									{this.state.showcaseItems[this.state.activeModal].content}
									<div className="showcase-images">
										{this.state.showcaseItems[this.state.activeModal].imageList.map( (item, index) => (
											<img alt="Thingo" className="" src={item} key={index} />
										))}
									</div>
								</div>
							</div>
							<div className="modal-controls">
								<button className="close" onClick={ () => this.closeModal() }>
									<div className="icon"></div>
									Close
								</button>

								<div className="middle">
									<button className="next" onClick={ () => this.nextModal() }>Next</button>
									<button className="prev" onClick={ () => this.prevModal() }>Prev</button>
								</div>

								<div className="number">
									<div className="from">{(this.state.activeModal + 1)}</div>
									<div className="to">{this.state.showcaseItems.length}</div>
								</div>
							</div>
						</div>
						}
						</Motion>

            {/* Content */}
						<div className="work-listings clearfix">
              <ul>
								{ this.state.showcaseItems.map( (item, index) => (
									<ShowcaseItem
										title={item.title}
										subtitle={item.subtitle}
										image={item.image}
										showItem={this.showItem.bind(this)}
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
