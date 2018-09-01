import React, {Component} from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export class OutlineButt extends Component{

	render(){

		const disabled =this.props.disabled? "disabled" : ""

		return(

			<button type="button" 
					className={"btn btn-primary "+disabled}

					onClick={this.props.onClick} disabled = {this.props.disabled? "disabled" : ""}>

	            <span className="ladda-label">{this.props.name}</span>

	            <span className="ladda-spinner"></span>

	        </button>
	)
	}
}

export const Btn = styled.button`

	outline: none !important;
  	box-shadow: none !important; 
  	background : blue;

  	&:hover {
    	transition: all 0.3s; 
    }
`;

export const SearchInputButton = (props)=>(
	<div class="input-group input-group-lg">
        <input type="text" class="form-control" placeholder="Search for..." />
        <span class="input-group-btn">
            <button class="btn green" type="button">Go!</button>
        </span>
    </div>
)