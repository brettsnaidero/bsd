import React, {Component} from 'react';
import { Link } from 'react-router';

// Utils
import * as _ from "lodash";

import {Motion, spring} from 'react-motion';
import ISeeYou from './iseeyou';

// App
export default class ShowcaseItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      top: 10,
      left: 10,
      width: 300,
      height: 300,
      windowWidth: 500,
      windowHeight: 1000,
      toggle: false,
      transitionConfig: {
        stiffness: 180,
        damping: 25,
        precision: 100
      }
    }
  }

  componentDidMount() {

  }

  render() {
    return (
      <li>
        <ISeeYou>
    		<Link to={`/work/${this.props.id}`} className="item">
              <div className="most">
                <div className="img-mask">
                  <div className="img-spacer"/>
                  <div className="show-mask"/>
                  <div className="img" ref="img" style={{
                    backgroundImage: 'url(' + this.props.image + ')'
                  }}/>
                </div>
                <div className="number-label">{(this.props.num + 1)}</div>
                <div className="text-label">
                  <div className="title">
                    <span>{this.props.title}</span>
                  </div>
                  <div className="desc">
                    <span>{this.props.subtitle}</span>
                  </div>
                </div>
              </div>
              <div className="url">http://mmjrealestate.com.au</div>
            </Link>
        </ISeeYou>
      </li>
    );
  }
};
