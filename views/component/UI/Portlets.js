import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import  './Portlets.css';

export class Portlets extends Component{

	render(){

		return(

			<div className="portlet box blue-hoki" >
			    <div className="portlet-title">
			        <div className="caption">
			            <i className="fa fa-gift"></i>Portlet1 </div>
			            <div className="actions">
			                <a href="javascript:;" className="btn btn-default btn-sm">
			            	    <i className="fa fa-pencil"></i> Edit </a>
			                <a href="javascript:;" className="btn btn-default btn-sm">
			    	            <i className="fa fa-plus"></i> Add </a>
			            </div>
			        </div>
			    <div className="portlet-body">
			    <div className="slimScrollDiv" ><div className="scroller" >
			        <strong>Scroll is hidden</strong>
			        <br/> Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
			            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus
			            sit amet fermentum. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. consectetur purus sit amet fermentum. Duis
			            mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. </div>
			            <div className="slimScrollBar" ></div><div className="slimScrollRail" ></div></div>
			    </div>
			</div>
		)
	}
}

module.exports = ReactDOM.render(<Portlets />, document.getElementById('MedApp'));