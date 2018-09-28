import React, {Component} from "react"
import proptypes from "prop-types"
import styled from "styled-components"

const StyledSection = styled.section`
	border : ${props=> props.border ? "1px solid red" : "none"};
	min-height : ${props=> props.height ? props.height+"px" : "none"};
	margin : 15px;

	&.carousel {
		width: 100%;
	    background: #fcfcfc;
	    position: relative;
	    margin-left: 0;
	    margin-right: 0;
	    margin-bottom: 0;
	    margin-top : 125px;
	    padding: 0;
	}
	& > .fit {
		width : 100%;
		height : 100%;
	}

	&.home {
		padding-top: 50px;
		display:block;
	    position:relative;
	    z-index:120;
		background-color: #fff;
		margin-left: 30px;
		margin-right : 30px;
		margin-top : -50px;
	}
`
/**
 **margin
 **width, heigth
 **padding
 **background
 **border
 **position
 **visible
 **/
class Section extends Component {

	render(){

		const props = this.props;
		const {classNames, classContainer} = this.props;
		const styles = {};
		
		//const debug = {...props, border:1};
		
		return	(			
			<StyledSection id={props.id} {...props} className={props.classNames}>
				<div className= {classContainer}> {props.children} </div>
			</StyledSection>
		)		
	}
}



export default Section;