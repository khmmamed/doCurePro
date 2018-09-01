import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import axios from 'axios';

import { AdmPageContent } from '../admLayout';

import {LightPortlet, PortletBody} from '../../styles/Portlet';
import {BtnIcon, Btn} from '../../styles/Button';

import styled from 'styled-components';

import {Table} from '../../styles/Table';

import {
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon
} from 'reactstrap';

const ReturnLink = styled(Link)`
    color : #fff;
`;
const BtnLink = styled(Link)`
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

const RespTable =(props)=>(

    <Table className="table table-striped table-condensed">
        <tbody>
            {props.list.map((data)=>
                <tr key={data.user}>
                    <td key={data}>{data.user}</td>
                </tr>   
            )}
        </tbody>
    </Table>
)

const Buttons = ({Superuser, test})=>(

  <LightPortlet bordered>
    
    <PortletBody>
       
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/Reference'}>
          <i className="fa fa-book">
              <i></i>
          </i>
          <div> Reference </div>
      </BtnLink>
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/Category'}>
          <i className="fa fa-sitemap">
              <i></i>
          </i>
          <div> Category </div>
      </BtnLink>
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/Summary'}>
          <i className="fa fa-edit">
              <i></i>
          </i>
          <div> Summary </div>
      </BtnLink>
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/Physiology'}>
          <i className="fa fa-file-o">
              <i></i>
          </i>
          <div> Physiology </div>
      </BtnLink>
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/Methodology'}>
          <i className="fa fa-file-o">
              <i></i>
          </i>
          <div> Methodology </div>
      </BtnLink>
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/Interpretation'}>
          <i className="fa fa-adjust">
              <i></i>
          </i>
          <div> Interpretation </div>
      </BtnLink>
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/finance'}>
          <i className="fa fa-money">
              <i></i>
          </i>
          <div> Finance </div>
      </BtnLink>
    {Superuser ? 
      <BtnLink to={'/khmmamed/eLab/tests/'+test+'/update'}>
          <i className="fa fa-update">
              <i></i>
          </i>
          <div> Entries </div>
      </BtnLink> : ''}

    </PortletBody>
  </LightPortlet>
)

const Forms = (props)=>(

      <div className="animated fadeIn">
                        
          <Col xs="12" sm={12} md="6">            
                <Form className="form-horizontal">
                  <FormGroup row>
                    <Col md="3">
                      <Label>Country</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input className="form-control" placeholder="Morocco" disabled/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Bcode</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input onChange={props.fn} value={props.Bcode} 
                             name="Bcode" 
                             placeholder={props.Bcode ? props.Bcode : "B code"}
                      />
                      <FormText color="muted">write B code</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Default Factor</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" placeholder={props.factor} disabled/>
                      <FormText className="help-block">this is a default factor</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label >Price</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" name="Price" placeholder={Math.floor(props.factor * props.Bcode)} disabled/>
                      <FormText className="help-block">Price is Bcode multiply factor</FormText>
                    </Col>
                  </FormGroup>
                </Form>
          </Col>        
      </div>
)


export class AdmEditTest extends Component{

	constructor(props){

		super(props);

	    this.state = {
        test        : {},
        name        : {},
        reference   : {},
        finance     : [],
        update      : []       
	    };

      this.user = this.props.match.params.user;
      this.test = this.props.match.params.test;
	}

  componentDidMount(){

    axios.get('/'+this.user+'/eLab/tests/show/'+this.test)
         .then(response => {
            this.setState({  
              test : response.data,
              name : response.data.name,
              reference : response.data.reference,
              finance : response.data.finance,
              update : response.data.update
            })
         })
         .catch(function (error) {
             console.log(error);
         });
    }

	render(){
		return(
			<AdmPageContent>
		        <h1 className="page-title">  {this.test}
		            <small> Edit test</small>
		        </h1>
		    <Row>
		        <Col xs={12} sm={12} md={10}>
		            <Buttons Superuser test={this.test}/>
		        </Col> 
        </Row>
        <Route path={'/:user/eLab/tests/:test/finance'}   render={props=><AdmEditTestFinance   finance={this.state.finance} user={this.user} test={this.test}/>} />
        <Route path={'/:user/eLab/tests/:test/update'}    render={props=><AdmEditTestUpdate    update={this.state.update} user={this.user} test={this.test} /> } />
        <Route path={'/:user/eLab/tests/:test/reference'} 
               render={props=><AdmEditTestReference reference={this.state.reference} name={this.state.name} user={this.user} test={this.test} />}/>
		  </AdmPageContent> 
		)
	}
}

export class AdmEditTestFinance extends Component{

  constructor(props){
    super(props);
    this.state = {

      factor : 1.34,
      Bcode : typeof this.props.finance[0] !== 'undefined' ? this.props.finance[0].Bcode : '',
      spin : "",
      disabled: false,
      user : this.props.user,
      test : this.props.test
    }

    this.handleChange = this.handleChange.bind(this);
    this.updateTestFinance = this.updateTestFinance.bind(this);

  }

  handleChange(e){
    this.setState({Bcode : e.target.value})
  }

  updateTestFinance(){

    this.setState({spin : "fa fa-spinner fa-spin", disabled: true})

    axios.post('/'+this.state.user+'/eLab/tests',{
      test : this.state.test,
      user : this.state.user,
      status : 'Superuser',
      finance : {Bcode : this.state.Bcode, country : 'Morocco'}
    })
    .then(response => {
      this.setState({spin : '', disabled : false }) ;
    })
    .catch(function (error) {
      console.log(error);
    }); 
  }

  render(){

    return(
      <div>
        <Row> 
          <Forms 
              fn={this.handleChange} 
              factor={this.state.factor} 
              Bcode={this.state.Bcode}
          />
        </Row>
        <Row>
          <Col xs="12" sm={12} md="6"> 
            <Btn className="btn" circle><ReturnLink to={'/khmmamed/eLab/tests'}>Return</ReturnLink></Btn>
            <Btn className="btn pull-right" circle onClick={this.updateTestFinance} disabled={this.state.disabled}>Save <i className={this.state.spin}></i> </Btn>
          </Col> 
        </Row> 
      </div>
    )
  }
}

export class AdmEditTestUpdate extends Component{

  constructor(props){

    super(props);
  }

  render(){

    return(

      <Row>
        <Col xs="12" sm={12} md="6">
          { this.props.update.length >= 1 ? <RespTable list={this.props.update} /> : "no update yet" }
        </Col>
      </Row>
    )
  }
}

export class AdmEditTestReference extends Component{
  
  constructor(props){

    super(props);

    this.state = {
      Mnemonic : '',
      frname : '',
      CPTCode  : '',
      user : this.props.user,
      test : this.props.test,
      spin : "",
      disabled: false
    }

    this.reference = this.props.reference;
    this.name = this.props.name;

    this.handleChange = this.handleChange.bind(this);
    this.updateTestReference = this.updateTestReference.bind(this);
  }

  handleChange(e) {

    let name = e.target.name;

    name == 'Mnemonic' ? this.setState({ Mnemonic : e.target.value}) 
         : (name == 'frname' ? this.setState({ frname : e.target.value}) 
                : this.setState({ CPTCode : e.target.value}));                     
  }

  updateTestReference(){

    this.setState({spin : "fa fa-spinner fa-spin", disabled: true})

    axios.post('/'+this.state.user+'/eLab/tests/reference',{
      test : this.state.test,
      user : this.state.user,
      status : 'Superuser',
      reference : {
        CPT       : this.state.CPTCode, 
        Mnemonic  : this.state.Mnemonic,
        code      : this.reference.code
      },
      name : { fr : this.state.frname }
    })
    .then(response => {
      this.setState({spin : '', disabled : false }) ;
    })
    .catch(function (error) {
      console.log(error);
    });     
  }

  render(){
    return(
      <div><Row>
        <Col xs="12" sm={12} md="6">            
          <Form className="form-horizontal">

            <FormGroup row>
              <Col md="3"> <Label>Mnemonic</Label> </Col>
              <Col xs="12" md="9"> 
                  <Input name="Mnemonic" value={this.state.Mnemonic} onChange={this.handleChange} 
                         placeholder={typeof this.reference.Mnemonic !== 'undefined' ? this.reference.Mnemonic : "Unic Name Identifier"} /> 
              </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3"> <Label>French Name</Label> </Col>
              <Col xs="12" md="9"> 
                  <Input name="frname" value={this.state.frname} onChange={this.handleChange} 
                         placeholder={typeof this.name.fr !== 'undefined' ? this.name.fr : "french Name"} /> </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3"> <Label>MAPP Code</Label> </Col>
              <Col xs="12" md="9"> <Input type="number" placeholder={this.reference.code !== null ? this.reference.code : 'write Code reference'} disabled/> </Col>
            </FormGroup>

            <FormGroup row>
              <Col md="3"> <Label >CPT Code</Label> </Col>
              <Col xs="12" md="9"> 
                <Input type="number" name="CPTCode" value={this.state.CPTCode } 
                       placeholder={typeof this.reference.CPT !== 'undefined' ? this.reference.CPT : "Enter CPT Code"} 
                       onChange={this.handleChange}/>
                <FormText className="help-block">CPT Codification</FormText>
              </Col>
            </FormGroup>
            
          </Form>
        </Col> 
      </Row>
      <Row>
        <Col xs="12" sm={12} md="6"> 
          <Btn className="btn" circle><ReturnLink to={'/khmmamed/eLab/tests'}>Return</ReturnLink></Btn>
          <Btn className="btn pull-right" circle onClick={this.updateTestReference} disabled={this.state.disabled}>Save <i className={this.state.spin}></i> </Btn>
        </Col> 
      </Row> </div>
  )}
}

export class AdmEditTestCategory extends Component{}

export class AdmEditTestSummery extends Component{}

export class AdmEditTestMethodology extends Component{}

export class AdmEditTestInterpretation extends Component{}

Buttons.defaultProps = {
  Superuser : false
}