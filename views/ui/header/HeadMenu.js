import React, {Component} from 'react';
import{
    Nav
} from 'reactstrap';



class HeadMenu extends Component{

	constructor(props){

		super(props);
		this.state={

			style : {
				color : 'red'
			}
		}
		this.onHoverChangeTextColor = this.onHoverChangeTextColor.bind(this);
	}

	onHoverChangeTextColor(){

		this.setState({style : {color : 'blue'}})
	}

	render(){

		return(

			<div id="contentMenu" className="filterOptions"  >
				<h1 style={this.state.style} onMouseOver= {this.onHoverChangeTextColor} >{this.props.title}</h1>
            	<br/><br/><br/><br/>
			</div>

		)
	}
}

module.exports = HeadMenu;




