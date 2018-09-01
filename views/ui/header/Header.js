import React,{Component} from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem,
    ButtonDropdown, 
    DropdownToggle, 
    DropdownMenu, 
    DropdownItem 
} from 'react-bootstrap';
import styled from 'styled-components';


export class FrontTopHeader extends Component{

    constructor(props){

        super(props);
    }
    render(){
        return(

            <div className="header_top">{/*<!--header_top-->*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-5">
                            <div className="contactinfo">
                                <ul className="nav nav-pills">
                                    <li><a href="#"><i className="fa fa-phone"></i> +2 95 01 88 821</a></li>
                                    <li><a href="#"><i className="fa fa-envelope"></i> info@domain.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-sm-7">
                            <UserMenu />
                        </div>
                    </div>
                </div>   
            </div>
        )
    }
}

export class FrontBottomHeader extends Component{

    constructor(props){

        super(props);
    }
    render(){
        return(
            <div className="header_bottom">{/*<!--header-bottom-->*/}
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="submenu pull-left">
                                <Nav navbar>
                                   <NavItem eventKey={1} href="/index">
                                        Home
                                    </NavItem>
                                    <NavDropdown id="tests" eventKey={2} title="Medical Procedures">
                                        <MenuItem eventKey={2.1}>Action</MenuItem>
                                        <MenuItem eventKey={2.2}>Another action</MenuItem>
                                        <MenuItem eventKey={2.3}>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey={2.4}>Separated link</MenuItem>
                                    </NavDropdown>
                                    <NavDropdown id="labos" eventKey={3} title="Labos">
                                        <MenuItem eventKey={3.1}>Action</MenuItem>
                                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey={3.4}>Separated link</MenuItem>
                                    </NavDropdown>
                                    <NavDropdown id="equipement" eventKey={4} title="Automate">
                                        <MenuItem eventKey={4.1}>Action</MenuItem>
                                        <MenuItem eventKey={4.2}>Another action</MenuItem>
                                        <MenuItem eventKey={4.3}>Something else here</MenuItem>
                                        <MenuItem divider />
                                        <MenuItem eventKey={4.4}>Separated link</MenuItem>
                                    </NavDropdown>
                                </Nav>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="search_box">
                                <input type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export class FrontHeader extends Component{

    constructor(props){

        super(props);
    }

    render(){
        return(

            <header id="header">
                {this.props.children}                
            </header>
        )
    }    
}

