import React,{Component} from 'react';
import styled from 'styled-components';


export const DefaultList = styled.div`
	
		&>.list-head {

			background-position: center;
			background-size: cover;
			background-repeat: no-repeat;
			padding: 15px;

			&>.list-title {
				margin: 0 0 0.7em 0;
    			font-size: 18px; }

			&>.list-date { font-size: 12px; }

			&>.list-pending { margin-bottom : 10px; }

			&>.list-count {

			    display: inline-block;
			    padding: 3px 7px; 

			    &.last { margin-bottom: 0; }
			}

			&>.list-label {
			    display: inline-block;
			    font-size: 12px; }
		}

		&>.list-container{

			border-left: 1px solid;
		    border-right: 1px solid;
		    border-bottom: 1px solid;
		    border-color: #e7ecf1;
		    padding: 15px;

		    &>.list-title {
			    padding-bottom: 15px;
			    font-size: 14px;
			    font-weight: 700; }

			&>ul {
			    margin-bottom: 0;
			    padding: 0; 
			}
		}
`;

export const ListItem = styled.li`
	list-style: none;
	border-bottom: 1px solid;
	border-color: #e7ecf1;
	padding: 25px 0;
	min-height: 45px;

	&:first-child {
    	padding-top: 0; }

    &:last-child {
    	padding-bottom: 0;
    	border: none; }
    &>.list-datetime {
	    text-align: right;
	    float: right;
	    width: 60px; }
	& > .list-icon-container {
	    border: 1px solid;
	    border-color: #e7ecf1;
	    border-radius: 50% !important;
	    padding: 0.9em;
	    float: left;
	    width: 45px;
	    height: 45px; }
	& > .list-item-content {
    	padding: 0 75px 0 60px; 

    & > h3 {
	  	margin-top: 0;
	   	margin-bottom: 5px;
	   	font-size: 16px; }
    & > p {
   		margin: 0; }
`;

export const TestsPanelList = styled.div`
	
	&> h3 {
		padding-left : 5px;
	}

	& > ul {
		
		padding-left: 20px;

		& > li {
			list-style : none;
			min-height : 45px;

			& > .testname {
				float :left;
				width : 70%;
			}

			& > .testoptions {
				width : 7%;
				height: 25px;
				color : red;
				float : right;

				& > i {font-size : 16px;}
			}
			& >.testprice{
				padding: 0 10% 0 75%;
				font-size : 10px;
			}
		}
	}
`;