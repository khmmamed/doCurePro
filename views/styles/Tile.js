import styled from 'styled-components';

export const Tile = styled.div`
	
	display: block;
    float: left;
    height: 135px;
    width: 135px!important;
    cursor: pointer;
    text-decoration: none;
    color: #fff;
    position: relative;
    font-weight: 300;
    font-size: 12px;
    letter-spacing: .02em;
    line-height: 20px;
    overflow: hidden;
    border: 4px solid transparent;
    margin: 0 10px 10px 0;

    /* define background dynamically */

    background : ${props => props.bg || '#E26A6A'};
`;

export const TileBody = styled.div`
	
	height: 100%;
    vertical-align: top;
    padding: 10px 10px;
    overflow: hidden;
    position: relative;
    font-weight: 400;
    font-size: 12px;
    color: #000000;
    color: #ffffff;
    margin-bottom: 10px;

    & > p {

		font-weight: 400;
        font-size: 13px;
        color: #000000;
        color: #ffffff;
        line-height: 20px;
        overflow: hidden;

        &:hover { color: rgba(0, 0, 0, 0.8); }
        &:active { color: rgba(0, 0, 0, 0.4); }
        &:hover {  color: #ffffff; } 	
    }

    & > i {
        margin-top: 17px;
        display: block;
        font-size: 56px;
        line-height: 56px;
        text-align: center; 
    }

    & > h1, h2, h3, h4,, h5, h6 {
    	padding: 0;
        margin: 0;
        line-height: 14px;

        &:hover { color: #ffffff; }
    }

    & > h3, h4 { margin-bottom: 5px; }
`;

export const TileObject = styled.div`
	position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    min-height: 30px;
    background-color: transparent;
    *zoom: 1;
`;

export const TileName = styled.div`
	
	position: absolute;
    bottom: 0;
    left: 0;
    margin-bottom: 5px;
    margin-left: 10px;
    margin-right: 15px;
    font-weight: 400;
    font-size: 13px;
    color: #ffffff;

    & > i {
    	vertical-align: middle;
        display: block;
        font-size: 24px;
        height: 18px;
        width: 24px;
    }
`;
        
export const TileNumber = styled.div`
	
	position: absolute;
    bottom: 0;
    right: 0;
    margin-bottom: 0;
    color: #ffffff;
    text-align: center;
    font-weight: 600;
    font-size: 14px;
    letter-spacing: 0.01em;
    line-height: 14px;
    margin-bottom: 8px;
    margin-right: 10px; 
`;

