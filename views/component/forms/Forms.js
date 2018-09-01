import React, { Component } from 'react';
import { Form, FormGroup, FormFeedback, FormText } from 'reactstrap';

export class Forms extends Component {

  constructor(props){ super(props);}

	render(){	return ( <Form>{this.props.children}</Form>  )}
 }

export class FormBody extends Component {

  constructor(props) { super(props); }

  render(){ return(<div></div>) }
 }

export class FormAction extends Component{
  
  constructor(props) { super(props); }

  render(){ return(<div></div>) }
 }


export const sForms = {

  form : {
    background : "white"
  },

  formBody : {

  },

  formAction : {

  },

  formGroup :{
    position: 'relative',
    marginLeft: 0,
    marginRight: 0,
    marginTop : 0,    
    marginBottom : 35,
    paddingTop: 20
  },

  formControl :{
    background: 'none',
    border: 0,
    borderBottom: '1px solid #c2cad8',
    WebkitBorderRadius: 0,
    MozBorderRadius: 0,
    MsBorderRadius: 0,
    OBorderRadius: 0,
    borderRadius: 0,
    color: '#555555',
    boxShadow: 'none',
    paddingLeft: 0,
    paddingRight: 0,
    fontSize: '14px'
  }

 }