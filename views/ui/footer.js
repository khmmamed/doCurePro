/**
 * Created by khm@med on 06/01/18.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Button } from 'reactstrap';
import {
    Nav,
    NavItem
} from 'react-bootstrap';


class Footer extends Component {

    render(){

    	return(
    		<div>
	    		<div className="page-footer-inner"> 2018 © Medical Application Co(R)p </div>
	    	</div>	
    	)
    }
}

module.exports = ReactDOM.render(<Footer />, document.getElementById('footer'));    


















				