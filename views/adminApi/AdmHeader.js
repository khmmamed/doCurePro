import React,{Component} from 'react';
import {
    Nav,
    Navbar,
    NavItem
} from 'react-bootstrap';

export class AdminHeader extends Component{
    
    render(){
        return(

            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a href="/">Medical App</a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>                    
                    <Nav pullRight>
                        <NavItem eventKey={1}>
                            <i className="fa fa-user"> KHMMAMED</i>
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}