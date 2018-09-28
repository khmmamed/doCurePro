import React, {Component} from "react"
import proptypes from "prop-types"
import styled from "styled-components"

export default class Row extends Component{
	render(){
		return(
			<div className={this.props.col}>
				{this.props.children}
			</div>
		)
	}
}