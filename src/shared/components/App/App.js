import React from 'react';
import { MatchRoutes, Match, Miss } from 'react-router';
import { TransitionMotion, spring } from 'react-motion'

import Helmet from 'react-helmet';
import { CodeSplit } from 'code-split-component';

import './sass/style.scss';

import NotFound from './NotFound/notfound';
import { safeConfigGet } from '../../utils/config';

import * as _ from 'lodash';

import showcaseItems from './data/showcase-items.js';
import blogItems from './data/blog-items.js';

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
	      >
          {/* <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://www.youtube.com; options inline-script" /> */}
        </Helmet>

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
	    		pattern="/writings/:id"
	    		render={routerProps =>
	    			<CodeSplit chunkName="blog" modules={{ Blog: require('./Blog/blog') }}>
	    				{ ({ Blog }) => Blog && <Blog {...routerProps} /> }
	    			</CodeSplit>
	    		}
	    	/>

        <Match
	    		exactly
	    		pattern="/work/:id"
	    		render={routerProps =>
	    			<CodeSplit chunkName="work" modules={{ Work: require('./Showcase/showcase') }}>
	    				{ ({ Work }) => Work && <Work {...routerProps} /> }
	    			</CodeSplit>
	    		}
	    	/>

	    	<Miss component={NotFound} />
    </div>
  );
}

export default App;
