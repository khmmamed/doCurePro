import React from 'react';

export const AdmLayoutBody = (props)=>(

	<div className="page-header-fixed page-content-white">{props.children}</div>
)

export const AdmHeader = (props)=>(

	<div id="header" className="page-header navbar navbar-fixed-top">{props.children}</div>
)

export const AdmContainer = (props)=>(

	<div id="main" className="page-container">{props.children}</div>
)

export const AdmSidebarWrapper = (props)=>(

	<div id="sidebar" className="page-sidebar-wrapper">{props.children}</div>
)

export const AdmContentWrapper = (props)=>(

	<div id="content" className="page-content-wrapper">{props.children}</div>
)

export const AdmPageContent = (props)=>(

	<div className="page-content" >{props.children}</div>
)


