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
import axios from 'axios';


export class MiddleH extends Component{

    constructor(props){

        super(props);
    }
    render(){
        return(

            <Navbar collapseOnSelect fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Logo />
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>                    
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">
                            Link Right
                        </NavItem>
                        <NavItem eventKey={2} href="#">
                            Link Right
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>      
        )
    }
}

export class Logo extends Component{
    render(){
        return(

            <LogoFront className="logo pull-left">
                <a href="/index"><span>Med</span>App</a>
            </LogoFront>
    )}
}

export class MiddleMenu extends Component{
    constructor(props){
        super(props);
        this.state = {
            user : 'Sign In',
            page : '/Login'
        }
    }

    componentDidMount(){

        axios.get('/userMenu')
               .then(response => {
                   response.data.user ? 
                            this.setState({user : response.data.user.username, page : '/'+response.data.user.username}) : 
                            this.setState({user : 'Sign In', page : '/Login'}) 
                })
               .catch(function (error) {
                    console.log(error);
                });
    }

    render(){
        return(

            <MddleMenu>
                <MiddleListMenu className="nav navbar-nav pull-right">
                    <li><a href={ this.state.page }><i className="fa fa-lock"></i> { this.state.user }</a></li>
                </MiddleListMenu>
            </MddleMenu>

        )
    }
}

export class Language extends Component{
    render(){
        return(

            <div className="btn-group pull-right">
                <div className="regionalnav">
                    <Nav navbar>
                        <NavDropdown id="lang" title={<i className="fa fa-globe"></i>}>
                            <MenuItem>Fr</MenuItem>
                            <MenuItem>Ar</MenuItem>
                        </NavDropdown>
                    </Nav>    
                </div>
            </div>

        )
    }
}

