import styled from 'styled-components';


/**Admin Page Style********
***************************/
export const AdmPage = styled.div`

`;

/**Admin Header Style *****
***************************/
export const AdmHeader = styled.div`
	
`;

export const AdmNavbar = AdmHeader.extend`
	
	width: 100%;
	padding: 0 20px 0 20px;
	margin: 0;
	border: 0px;
	padding: 0px;
	box-shadow: none;
	height: 20px;
	min-height: 50px;
	filter: none;
	background-image: none;

	z-index : ${props => props.fixedtop ? '9995;' : '9995;'}
`;

/**Admin Menu Style *******
***************************/
export const AdmMenu = styled.div`
	
	border-bottom: 1px solid gray;
	border-top: 1px solid gray;
    min-height: 50px;
    background-color: white;
    margin-top: 5px;
    margin-left : -5px;
    margin-right : -10px;
`;

/**Admin Container Style **
***************************/
export const AdmContainer = styled.div`

	margin-top: 50px;
    padding: 0px;
    position: relative;
    min-height: 532px;
`;

//SideBar
export const AdmSidebarWrapper = styled.div`
	
`;

export const AdmSidebarStyle = styled.div`
	
    width: 235px;
    float: left;
    position: relative;
    margin-right: -100%;

	@media (max-width: 991px){
		display : none
	}

`;

//Content
export const AdmContentWrapper = styled.div`
	float: left;
    width: 100%;
`;

export const AdmContent = styled.div`

`;


export const AdmPageContent = styled.div`
	
	margin-top: 0px;
	padding: 0px;
	background-color: #fff;

	@media (min-width: 992px) {
		margin-left: 235px;
	    margin-top: 0px;
	    min-height: 920px;
	    padding: 25px 20px 10px 20px;
	}

	@media (max-width: 991px){
		min-height: 920px;
	}

	@media (min-width: 768px) and (max-width: 991px) {
		min-height: 920px;
	}

	@media (max-width: 767px) {
		min-height: 920px;
	}

	@media (max-width: 480px) {
		min-height: 732px;
	}
`;

/**Admin Footer Style *****
***************************/
export const AdmFooter = styled.div`

`;
