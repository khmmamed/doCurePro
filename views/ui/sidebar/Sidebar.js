import React,{Component} from 'react';
import {
    Nav
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class SideBar extends Component{

	render(){

		return(
            <div className="sidebar">
    			<ul className="list-group">
                    <li className="list-group-item">Ionogramme</li>
                    <li className="list-group-item">Lipidique</li>
                    <li className="list-group-item">Hepatique</li>
                    <li className="list-group-item">Hemodynamique</li>
                    <li className="list-group-item">Serologique</li>
                    <li className="list-group-item">Genetique</li>
                    <li className="list-group-item">PCR</li>
                    <li className="list-group-item">HPLC</li>
                    <li className="list-group-item">Drugs</li>
                    <li className="list-group-item">Hematologique</li>
                    <li className="list-group-item">Biochimique</li>
                    <li className="list-group-item">Immunologique</li>
                </ul>
            </div>
		)
	}
}

export class AdminSide extends Component{

    render(){

        return(
                <div className="page-sidebar navbar-collapse collapse">
                    <ul className="page-sidebar-menu  page-header-fixed ">        
                        <li className="nav-item start ">
                            <a className="nav-link ">
                                <i className="icon-home"></i>
                                <span className="title">Administration</span>
                            </a>
                            <ul>
                                <li><Link to={'/khmmamed'}>Profile</Link></li>
                                <li>Setting</li>
                            </ul>
                        </li> 
                        <li className="nav-item start ">
                            <Link to={'/khmmamed/eLab/tests'}>
                                <i className="icon-bar-chart"></i>
                                 <span className="title">eLab</span>
                            </Link>
                        </li>                                 
                    </ul>
                </div>
        )
    }
}