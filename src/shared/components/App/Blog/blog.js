import React, { Component } from 'react';

// Utils
import * as _ from 'lodash';

import Header from '../bits/header';

export default class WritingsPage extends Component {
	constructor(props) {
        super(props);
    }

		componentDidMount() {
			// Scroll to top on load
			window.scrollTo(0,0);
		}

	render() {
		console.log(this.props.params.id);
		return (
			<div>
				<Header styling="light" />

				<section className="blog-page">
					<article className="Article Page">
						<h1>The UX of a Sandwich <time>August 10, 2014</time></h1>
						<p>There's a sandwich at my local coffee shop that looks superb. It's a coronation chicken hoagie. For those who do not live the UK, coronation chicken is basically chicken salad with cumin, some other spices, raisins...  it basically takes the whole mess to the <em>next level!</em>  It's tasty, it's sumptuous and all-round delicious. At this particular joint, it's served in a big ciabatta roll. Its cross-section looks something like this:</p>
						<p>
							<img src="/media/articles/ux-of-a-sandwich/sandwich-cross-section.svg" alt="The sandwich in question" />
						</p>
						<p>At this point, you're probably smacking your lips and cursing the fact you can't magic one out of thin air. But underneath its crusty coat, a problem is lurking. Ladies and gentlemen, this is an <em>unusable sandwich.</em></p>
						<p>See, this ciabatta has a crunchy, hard crust. Coronation chicken is squishy. Subsequently, when I take a big bite out of this beastly sandwich, all the filling ejects from the side. Everywhere. "But Devin!" you remark "just gnaw at your sandwich tenderly!" Fuck you. This is a sandwich, not the starter in a 9 course tasting menu. I should be able to "chow down".</p>
						<p>It's presentation and it's components are wonderful. It makes sense. I can see how I should use it. It has pretty solid UI. The affordance seems to be there. But when I try to use it, well, the whole thing falls apart. Literally. In fact, it makes more work for me. The sandwich's experience is broken.</p>
						<p>Traditionally, coronation chicken is served on fluffy, completely unhealthy white bread. It's glorious. Squish fiesta. The bread envelopes the filling. Even with a big bite, the white bread holds the contents inside.</p>
						<p>For me, this is a great metaphor of the downfalls of aesthetic-first design. Before you start focusing on the look and feel of anything, you need to first understand the experience you are trying to create. I often come across product designers who start with the UI of the product. Hell, I'm guilty of this. I can understand why; it's the tangible part of what we make. It's what people first encounter when they open an app, flip through a catalog, or open a box. It's the fun part of what we as designers create. But it's such a small part of the overall experience.</p>
						<p>It's our job to look at the whole experience that involves our creation, not just the veneer that people poke at. The last thing you want in the app store is a review that says:</p>
						<p>“Looks great, but is unusable.”</p>
					</article>
				</section>
			</div>
		);
    }
};
