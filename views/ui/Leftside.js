import React from 'react';
import {
    Nav,
    Navbar,
    NavItem,
    NavDropdown,
    MenuItem
} from 'react-bootstrap';
import ReactDOM from 'react-dom';

class Header extends React.Component {

    render(){

        return(

            <div className="page-sidebar navbar-collapse collapse">
                <ul className="page-sidebar-menu  page-header-fixed ">
                            
                    <li className="nav-item start active open">
                        <a className="nav-link nav-toggle">
                            <i className="icon-home"></i>
                                <span className="title">Cabinet Najib Boudraa</span>
                                <span className="selected"></span>
                                <span className="arrow open"></span>
                        </a>
                        <ul className="sub-menu">
                            <li className="nav-item start active open">
                                <a href="index.html" className="nav-link ">
                                    <i className="icon-bar-chart"></i>
                                        <span className="title">Nouveau Patient</span>
                                        <span className="selected"></span>
                                </a>
                            </li>
                            <li className="nav-item start active open">
                                <a href="index.html" className="nav-link ">
                                    <i className="icon-bar-chart"></i>
                                        <span className="title">Trouver Patient</span>
                                        <span className="selected"></span>
                                </a>
                            </li>

                        </ul>
                    </li>
                </ul>        
            </div>
        )
    }
}

module.exports = ReactDOM.render(<Header />, document.getElementById('sidebar'));