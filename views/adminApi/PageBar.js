import React, {Component} from 'react';

export class PageBar extends Component {

	constructor(props){super(props)}

	render(){

		return(

			<div className="page-bar">
        		<Breadcrumb />
            </div>
	)}
}

const Breadcrumb = ()=>(

	<ul className="page-breadcrumb">
        <li>
            <a href="index.html">Home</a>
            <i className="fa fa-circle"></i>
        </li>
        <li>
            <a href="#">Blank Page</a>
            <i className="fa fa-circle"></i>
        </li>
        <li>
            <span>Page Layouts</span>
        </li>
    </ul>
)