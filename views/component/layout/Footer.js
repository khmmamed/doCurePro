import React, {Component} from "react"
import styled from "styled-components"

const StyledFooter = styled.footer`

	padding : 50px 0 0;
	background-color : #f2f2f2;

`

class Footer extends Component {

	render(){

		return(

			<StyledFooter>

				{this.props.children}

			</StyledFooter>

		)
	}
}

export default Footer;