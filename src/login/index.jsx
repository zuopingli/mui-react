import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { A10Button } from 'a10-gui-widgets';
import './index.less';

import Header from '../component/header/index';

class Login extends Component {
    componentDidMount() {
    	
    }
    handleNavigator() {
    	mui.openWindow({
    		url: '../main/index.html',
    		id: '../main/index.html'
    	})
    }
    render() {
        return (
            <div>
            	<div className="mui-content">
					<div>
					  <A10Button type="primary">Primary</A10Button>
					  <A10Button>Default1</A10Button>
					  <A10Button type="dashed">Dashed</A10Button>
					  <A10Button type="danger">Danger</A10Button>
					</div>
            	</div>
            </div>
        );
    }
}

ReactDOM.render(
    <Login/>,
    document.querySelector('#app')
)