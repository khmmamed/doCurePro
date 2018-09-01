import styled from 'styled-components';

export const Portlet = styled.div`
	
	margin-top: 0;
    margin-bottom: 25px;
    padding: 0;
    border-radius: 4px;

 `;

export const LightPortlet = Portlet.extend`
 	padding: 12px 20px 15px;
    background-color: #fff;
    border: ${props => props.bordered ? '1px solid #e7ecf1' : 'none'}
 `;

export const PortletTitle = styled.div`
	
	border-bottom: 1px solid #eee;
    padding: 0;
    margin-bottom: 10px;
    min-height: 41px;
    -webkit-border-radius: 4px 4px 0 0;
    -moz-border-radius: 4px 4px 0 0;
    -ms-border-radius: 4px 4px 0 0;
    -o-border-radius: 4px 4px 0 0;
    border-radius: 4px 4px 0 0;
 `;

export const Caption = styled.div`
	
	float: left;
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    padding: 10px 0;

    & > i {

    	float: left;
	    margin-top: 4px;
	    display: inline-block;
	    font-size: 13px;
	    margin-right: 5px;
	    color: #666;

    }
 `;

export const PortletActions = styled.div`
	
	float: right;
    display: inline-block;
    padding: 6px 0;

    & > i {

    	font-size : 21px;
    	color : blue;
    }
 `;

export const PortletBody = styled.div`
	
	clear: both;
    -webkit-border-radius: 0 0 4px 4px;
    -moz-border-radius: 0 0 4px 4px;
    -ms-border-radius: 0 0 4px 4px;
    -o-border-radius: 0 0 4px 4px;
    border-radius: 0 0 4px 4px;
 `;