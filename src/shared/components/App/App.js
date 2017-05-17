import React from 'react';
import { Switch, Route } from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import Helmet from 'react-helmet';
import { CodeSplit } from 'code-split-component';

import './sass/style.scss';

// Pages
import Home from './Home/home';
import Blog from './Blog/blog';
import Work from './Showcase/showcase';
import NotFound from './NotFound/notfound';

import { safeConfigGet } from '../../utils/config';

import * as _ from 'lodash';

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
          <meta http-equiv="Content-Security-Policy" content="default-src 'self' https://www.youtube.com; options inline-script" />
        </Helmet>

        <Route render={({ location }) => (
          <ReactCSSTransitionGroup
            transitionName="fade"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
          <Switch key={location.key}>
    	    	<Route
    	    		exact
    	    		path="/"
    	    		component={Home}
    	    	/>

            <Route
    	    		path="/writings/:id"
    	    		component={Blog}
    	    	/>

            <Route
    	    		path="/work/:id"
    	    		component={Work}
    	    	/>

    	    	<Route component={NotFound} />
          </Switch>
          </ReactCSSTransitionGroup>
        )}/>
    </div>
  );
}

export default App;
