import React,{Component} from 'react';
import styled from 'styled-components';


export const PageHeader = styled.nav`
	background: #2b3643;

`; 

export const Navbar = styled.div`
	width: 100%;
  	padding: 0 20px 0 20px;
  	margin: 0;
  	border: 0px;
  	padding: 0px;
  	box-shadow: none;
  	height: 50px;
  	min-height: 50px;
  	filter: none;
  	background-image: none;  	
`; 

export const NavbarFixedTop = styled.div`
	z-index: 9995;
`;

export const NavbarStaticTop = styled.div`
	z-index: 9995;
`;

export const Logo = styled.div`
	float: left;
    display: block;
    width: 235px;
    height: 50px;
    padding-left: 20px;
    padding-right: 20px;

    & > a {
    	display: inline-block;
      	float: left;
      	font-size : 30px;
      	& > span {
      		color : red;
      	}
    }
    & > a:hover { 
    	text-decoration: none;
    	color : #337ab7 }

    @media (max-width: 768px){
    	width : inherit;
    	padding-left : 0px;
    	padding-right : 0px;
    }
`;

export const TopMenu = styled.div`
	margin: 0;
    padding: 0;
    float: right;
`;

export const TopMenuNavbar = styled.ul`
	padding: 0;
    margin-right: 20px;
    display: block;
`;

export const TopMenuList = styled.li`
	margin: 0px;
    padding: 0px 4px;
    height: 50px;
    display: inline-block;
    color: white;

    &.dropdown {
    	margin: 0px;
        padding: 0px 4px;
        height: 50px;
        display: inline-block;

        &:last-child { padding-right: 0px; }

        &.dropdown-toggle{
        	margin: 0px;
          	padding: 19px 10px 10px 10px;

          	&:last-child { padding-right: 0; }

          	& >i{ font-size: 17px; }
        }
    }
`;

export const Badge = styled.span`
	font-family: "Open Sans", sans-serif;
    position: absolute;
    top: 10px;
    right: 20px;
    font-weight: 300;
    padding: 3px 6px;
`;

export const Search = styled.div`
	display: ${props => props.show};
`;

