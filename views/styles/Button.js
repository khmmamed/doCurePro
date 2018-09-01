import styled from 'styled-components';

export const BtnIcon = styled.a`
	
	height: 60px;
    min-width: 80px;
    margin: 5px 5px 0 0;
    border: 1px solid #ddd;
    padding: 12px 0 0;
    background-color: #fafafa;
    background-image: none;
    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;
    display: inline-block;
    color: #646464;
    text-shadow: none;
    text-align: center;
    cursor: pointer;
    position: relative;
    transition: all .3s ease;    
`;

export const Btn = styled.button`    
    
    color: #fff;
    background-color: #8E44AD;
    border-color: #8E44AD;

    border-radius: ${ props => props.circle ? '25px' : '' };
    overflow: ${ props => props.circle ? 'hidden' : ''};

    & > i { color : #fff; margin-left : 5px;}
`;