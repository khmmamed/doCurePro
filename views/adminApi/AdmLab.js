import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


//Load admin parts
import {AdminHeader} from './AdmHeader';
import {AdminSide} from '../ui/sidebar/Sidebar';

//Load admin Layout
import {AdmPage, AdmNavbar, AdmMenu, AdmContainer, AdmSidebarWrapper, AdmSidebarStyle, AdmContentWrapper} from './admLayout';

//Load Component
import {AdmListAllTests} from './admLab/AdmListAllTests';
import {AdmEditTest} from './admLab/AdmEditTest';
import {AdmProfile} from './AdmUser/AdmProfile';
import {AdmSidebar} from './AdmUser/AdmSidebar';




class AdmLab extends Component {

    render(){
        return(
            <Router>
                <AdmPage>

                    <AdmNavbar fixedtop> <AdminHeader />   </AdmNavbar>

                    <AdmContainer>

                        <AdmSidebarWrapper>

                            <AdmSidebarStyle>   <AdmSidebar />  </AdmSidebarStyle>

                        </AdmSidebarWrapper>

                        <AdmContentWrapper>
                            
                            <Route exact path={'/khmmamed'} component={AdmProfile} />
                            <Route exact path={'/khmmamed/eLab/tests'} component={AdmListAllTests} />
                            <Route path={'/:user/eLab/tests/:test'} component={AdmEditTest} />
                                
                        </AdmContentWrapper>
                        
                    </AdmContainer>

                    <div id="footer" className="page-footer">khmamed@Co(r)p</div>
                </AdmPage>
            </Router>
    )}
}

module.exports = ReactDOM.render(<AdmLab />, document.getElementById('MedApp'));