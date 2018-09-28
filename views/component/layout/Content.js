import React, {Component} from "react"
import styled from "styled-components"

class Content extends Component {

	render(){

		const props = this.props;
		const {classes} = props;
			

		return(
			<div className={classes}>
				{props.children}
			</div>
		)
	}
}

export default Content;