import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const SidebarMenu = (props) => (<ul> <li> <i className={props.ico}></i> {props.titre} {props.children}</li></ul>)

const SidebarSubMenu = (props) => (
    <ul>
        <li><Link to={props.link}>Profile</Link></li>
        <li>Setting</li>
    </ul> 
)

export class AdmSidebar extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(

            <SidebarMenu titre="Administration">

                <SidebarSubMenu link = {'/khmmamed'}/>

                <li className="nav-item start ">
                    <Link to={'/khmmamed/eLab/tests'}>
                        <i className="icon-bar-chart"></i>
                            <span className="title">Users</span>
                    </Link>
                    <ul>
                        <li>listAllUsers</li>
                        <li>AddNewUser</li>
                        <li>ViewUserProfile</li>
                        <li>UpdateUser</li>
                        <li>DeleteUser</li>
                    </ul>
                </li> 
                <li className="nav-item start ">
                    <i className="icon-bar-chart"></i>
                    <span className="title">eLab</span>                    
                    <ul>
                        <li><Link to={'/khmmamed/eLab/tests'}>Procedures</Link></li>
                        <li>Labos</li>
                        <li>Equipement</li>
                        <li>Personals</li>
                    </ul>
                </li> 

                
            </SidebarMenu>
    )}
}