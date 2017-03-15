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
						<svg x="0px" y="0px" viewBox="0 0 53 53">
							<path className="st0" d="M51,53H2c-1.1,0-2-0.9-2-2V2c0-1.1,0.9-2,2-2h49c1.1,0,2,0.9,2,2v49C53,52.1,52.1,53,51,53z"/>
						</svg>

						{/* Shape 2 */}
						<svg x="0px" y="0px" viewBox="0 0 14.1 14.1">
						<path className="st0" d="M13.4,10l-1.3-1.3c-0.9-0.9-0.9-2.4,0-3.3l1.3-1.3c0.9-0.9,1-2.4,0.2-3.3c-0.9-1-2.5-1-3.4-0.1L8.7,2.1
							C7.8,3,6.3,3,5.4,2.1L4.1,0.8c-0.9-0.9-2.4-1-3.3-0.2c-1,0.9-1,2.5-0.1,3.4l1.4,1.4C3,6.3,3,7.8,2.1,8.7L0.8,10
							c-0.9,0.9-1,2.4-0.2,3.3c0.9,1,2.5,1,3.4,0.1l1.4-1.4c0.9-0.9,2.4-0.9,3.3,0l1.4,1.4c0.9,0.9,2.5,0.9,3.4-0.1
							C14.4,12.4,14.3,10.9,13.4,10z"/>
						</svg>

						{/* Shape 3 */}
          </div>
        );
    }
};
