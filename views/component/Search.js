import React,{Component} from 'react';
import styled from 'styled-components';

const SearchInput = styled.input`
    padding-right: 33px;
    padding-left: 12px;

    @media (max-width: 768px) {
        width : 100% !important;
    }
`;

const SearchIcon = styled.i`
    left: auto;
    right: 8px;
    float: right;
    margin-top: 16px;
    position: absolute;
    margin: 11px 2px 4px 10px;
    z-index: 3;
    width: 16px;
    font-size: 16px;
    text-align: center;
`;

export class Searching extends Component{

    constructor(props){

        super(props);
    }

	render (){

		return(

			<div className="input-icon input-icon-lg right">
                <SearchIcon className="fa fa-search font-green"></SearchIcon>
                <SearchInput  type="text" 
                        className="form-control input-lg" 
                        onChange={this.props.onChange} 
                        placeholder="Find Medical Procedure"
                />
            </div>                 
                
		)
		
	}
}