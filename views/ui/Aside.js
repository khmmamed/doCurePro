/**
 * Created by khm@med on 06/01/18.
 */

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {
    Nav,
    NavItem
} from 'react-bootstrap';


class Aside extends Component {

    render(){

        return (

            <aside>
                <Nav>
                    <NavItem eventKey={1} href="/home">
                        NavItem 1 content
                    </NavItem>
                    <NavItem eventKey={2} title="Item">
                        NavItem 2 content
                    </NavItem>
                    <NavItem eventKey={3} disabled>
                        NavItem 3 content
                    </NavItem>
                </Nav>
            </aside>
        )
    }
}

module.exports = ReactDOM.render(<Aside />, document.getElementById('aside'));