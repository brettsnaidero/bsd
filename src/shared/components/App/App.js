import React from 'react';
import { Match, Miss } from 'react-router';
import Helmet from 'react-helmet';
import { CodeSplit } from 'code-split-component';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import './sass/style.scss';

import Header from './bits/header';

import NotFound from './NotFound/notfound';
import { safeConfigGet } from '../../utils/config';

function App() {
  return (
    <div>
      {/*
        All of the following will be injected into our page header.
        @see https://github.com/nfl/react-helmet
      */}
      <Helmet
        htmlAttributes={safeConfigGet(['htmlPage', 'htmlAttributes'])}
        titleTemplate={safeConfigGet(['htmlPage', 'titleTemplate'])}
        defaultTitle={safeConfigGet(['htmlPage', 'defaultTitle'])}
        meta={safeConfigGet(['htmlPage', 'meta'])}
        link={safeConfigGet(['htmlPage', 'links'])}
        script={safeConfigGet(['htmlPage', 'scripts'])}
      />

			<Header />

			<ReactCSSTransitionGroup
				component="div"
				transitionName="example"
				transitionEnterTimeout={10000}
				transitionLeaveTimeout={10000}
			>
				<Match
					exactly
					pattern="/"
					render={routerProps =>
						<CodeSplit chunkName="home" modules={{ Home: require('./Home/home') }}>
							{ ({ Home }) => Home && <Home {...routerProps} /> }
						</CodeSplit>
					}
				/>

				<Match
					exactly
					pattern="/work/:id"
					render={routerProps =>
						<CodeSplit chunkName="work" modules={{ WorkPage: require('./Showcase/showcase') }}>
							{ ({ WorkPage }) => WorkPage && <WorkPage {...routerProps} /> }
						</CodeSplit>
					}
				/>

				<Match
					exactly
					pattern="/writings/:id"
					render={routerProps =>
						<CodeSplit chunkName="writings" modules={{ WritingsPage: require('./Blog/blog') }}>
							{ ({ WritingsPage }) => WritingsPage && <WritingsPage {...routerProps} /> }
						</CodeSplit>
					}
				/>

				<Miss component={NotFound} />
			</ReactCSSTransitionGroup>
    </div>
  );
}

export default App;
