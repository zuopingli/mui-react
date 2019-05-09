import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import { A10Button } from 'a10-gui-widgets';
import './index.less';

import Header from '../component/header/index';

class Index extends Component {
    componentDidMount() {
        console.log(mui)
    }
    render() {
        return (
            <div>
        		<Header title="首页" back={true} />
				  <div>

					
				  </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Index/>,
    document.querySelector('#app')
)