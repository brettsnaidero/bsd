import React from 'react';
import { Match, Miss } from 'react-router';
import { CodeSplit } from 'code-split-component';
import PageTransition from 'react-router-page-transition';

const Page = (props) => (
	<div>
		<PageTransition timeout={500}>
			{props.children}
		</PageTransition>
	</div>
)

export default Page;
