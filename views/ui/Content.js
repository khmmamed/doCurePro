import React from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Content extends React.Component {

    render(){

        return(

            <div className="page-content">this is our Content text</div>
        )
    }
}

module.exports = ReactDOM.render(<Content />, document.getElementById('content'));