import React from 'react';
import {
    FormGroup,
    ControlLabel,
    FormControl,
    HelpBlock
} from 'react-bootstrap';
import {
  Badge,
  Row,
  Button,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink
} from 'reactstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';


class AddPatient extends React.Component {

  render() {
    var i = 0;
    var createItem = function(itemText) {
      return <td key={i++}>{itemText}</td>;
    };
    return console.log(<tr>{this.props.items.map(createItem)}</tr>);
  }
}

class Form extends React.Component {

	constructor(props){

		super(props);

		this.state = {

      fname : false, fnameValue : '',
      lname : false,
      tele : false,
      email : false,
      dob : false,
      adress : false,
      city : false,
      country : false,
			valText : 'Validation is based on string length.',
			express : 'Hello'
		};

    this.onHoverChangeText = this.onHoverChangeText.bind(this);
    this.fname = this.fname.bind(this);
    this.lname = this.lname.bind(this);
    this.tele = this.tele.bind(this);
    this.email = this.email.bind(this);
    this.dob = this.dob.bind(this);
    this.adress = this.adress.bind(this);
    this.city = this.city.bind(this);
    this.country = this.country.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
		this.showOurTextFromExpress = this.showOurTextFromExpress.bind(this);
	}

	showOurTextFromExpress() {

	    axios.get('/api')
		  .then(response => {
		    console.log(response)
		  })
		  .catch(function (error) {
		    console.log(error);
		  });
  	}

	onHoverChangeText(){

		this.setState({valText : 'Please write Your Name'})
	}
  fname(e){ this.setState({fname : true, fnameValue: e.target.value}) }
  lname(){ this.setState({lname : true}) }
  tele(){ this.setState({tele : true}) }
  email(){ this.setState({email : true}) }
  dob(){ this.setState({dob : true}) }
  adress(){ this.setState({adress : true}) }
  city(){ this.setState({city : true}) }
  country(){ this.setState({country : true}) }
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.fnameValue);
  }

	render (){

		return (
			<div className="page-content">
			    <Row>
            <Col md="6">
              <div className="portlet box purple">
                <div className="portlet-title">
                  <div className="caption ">
                    <i className="fa fa-user"></i>
                    <span className="caption-subject bold uppercase"> Information Personel de Patient</span>
                  </div>
                </div>
                <div className="portlet-body form">
                  <form onSubmit={this.handleSubmit}>
                    <div className="form-body">
                      <Row>
                        <Col md="6">
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.fname?"form-control edited" : "form-control"} id="form_control_1" onInput={this.fname} value={this.state.fnameValue}/>
                              <label>Nom</label>
                              <span className="help-block">Entrer le nom en capital lettre...</span>
                          </div>
                        </Col>
                        <Col md="6">  
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.lname?"form-control edited" : "form-control"} id="form_control_1" onInput={this.lname}/>
                              <label>Prenom</label>
                              <span className="help-block">le premier lettre doit etre capital...</span>
                          </div>
                        </Col>
                      </Row>  
                      <Row>
                        <Col xs="6" md="6">    
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.tele?"form-control edited" : "form-control"} id="form_control_1" onInput={this.tele}/>
                            <label>Tele</label>
                            <span className="help-block">Entrer le tele sans zero ex: 661...</span>
                          </div>
                        </Col> 
                        <Col xs="6" md="6">
                          <div className="form-group form-md-checkboxes pull-right">
                            <label>Genre</label>
                            <div className="md-checkbox-inline">
                              <div className="md-checkbox">
                                <input type="checkbox" id="checkbox6" className="md-check"/>
                                <label htmlFor="checkbox6">
                                <span></span>
                                <span className="check"></span>
                                <span className="box"></span> Homme </label>
                              </div>
                              <div className="md-checkbox">
                                <input type="checkbox" id="checkbox7" className="md-check"/>
                                <label htmlFor="checkbox7">
                                <span></span>
                                <span className="check"></span>
                                <span className="box"></span> Femme</label>
                              </div>
                              <div className="md-checkbox">
                                <input type="checkbox" id="checkbox8" className="md-check"/>
                                <label htmlFor="checkbox8">
                                <span></span>
                                <span className="check"></span>
                                <span className="box"></span> Enfant </label>
                              </div>
                            </div>
                          </div>
                        </Col> 
                      </Row>
                      <Row>
                        <Col xs="6" md="6">
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.email?"form-control edited" : "form-control"} id="form_control_1" onInput={this.email} />
                              <label>Email</label>
                              <span className="help-block">exemple@email.com</span>
                          </div>
                        </Col> 
                        <Col xs="6" md="6">
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.dob?"form-control edited" : "form-control"} id="form_control_1" onInput={this.dob} />
                              <label>Date Naissance</label>
                              <span className="help-block">dd/mm/aa</span>
                          </div>
                        </Col> 
                      </Row>
                      <Row><Button color="primary" >Valider</Button></Row>
                    </div>    
                  </form>
                </div>
              </div>
            </Col>         
            <Col md="6">
              <Card>
                <CardHeader>
                  <i className="fa fa-align-justify"></i> Patients
                </CardHeader>
                <CardBody>
                  <Table responsive striped>
                    <thead>
                      <tr>
                        <th>Nom et Prenom</th>
                        <th>Derniere Visite</th>
                        <th>Raison de visite</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Rachida MAAROUFI</td>
                        <td>2018/01/02</td>
                        <td>FIV</td>
                        <td>
                          <Badge color="success">Payé</Badge>
                        </td>
                      </tr>
                      <tr>
                        <td>Yousra Bouanan</td>
                        <td>2018/01/09</td>
                        <td>Gyneco</td>
                        <td>
                          <Badge color="warning">Impayé</Badge>
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col xs="6" md="6">
              <div className="portlet light bordered">
                <div className="portlet-title">
                  <div className="caption font-green">
                    <i className="icon-pin font-green"></i>
                    <span className="caption-subject bold uppercase"> Adress du Patient</span>
                  </div>
                </div>
                <div className="portlet-body form">
                  <form>
                    <div className="form-body">
                      <Row>
                        <Col md="12">
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.adress?"form-control edited" : "form-control"} id="form_control_1" onInput={this.adress} />
                              <label>Adress</label>
                              <span className="help-block">Rue Numero Avenue...</span>
                          </div>
                        </Col>
                      </Row>  
                      <Row>
                        <Col xs="6" md="6">    
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.city?"form-control edited" : "form-control"} id="form_control_1" onInput={this.city} />
                            <label>Ville</label>
                            <span className="help-block">ville de residence</span>
                          </div>
                        </Col> 
                        <Col xs="6" md="6">
                          <div className="form-group form-md-line-input form-md-floating-label">
                            <input type="text" className={this.state.country?"form-control edited" : "form-control"} id="form_control_1" onInput={this.country} />
                            <label>Pays</label>
                            <span className="help-block">Pays actuelle...</span>
                          </div>
                        </Col> 
                      </Row>
                    </div>    
                  </form>
                </div>
              </div>
            </Col>
            <Col xs="6" md="6">
              <Row>
                <Col md="12">
                  <div className="portlet box red">
                    <div className="portlet-title">
                      <div className="caption ">
                        <i className="icon-pin"></i>
                        <span className="caption-subject bold uppercase"> Donner un Rendez-Vous</span>
                      </div>
                    </div>
                    <div className="portlet-body form">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-body">  
                        <Row>
                          <Col md="3">
                            <label>Entrer une date</label>
                            <div className="input-group input-medium date date-picker" data-date-format="dd-mm-yyyy" data-date-start-date="+0d" >
                              <input type="text" className="form-control" readOnly="" />
                                <span className="input-group-btn">
                                <button className="btn default" type="button">
                                  <i className="fa fa-calendar"></i>
                                </button>
                              </span>
                            </div>
                          </Col> 
                        </Row>
                        </div>
                      </form> 
                    </div>
                  </div>
                </Col>
                <Col md="12">
                  <div className="portlet box yellow">
                    <div className="portlet-title">
                      <div className="caption ">
                        <i className="icon-pin"></i>
                        <span className="caption-subject bold uppercase"> Reglement</span>
                      </div>
                    </div>
                    <div className="portlet-body form">
                      <form onSubmit={this.handleSubmit}>
                        <div className="form-body">  
                        <Row>
                          <Col md="3">
                            <label>Montant Total</label>
                            <div className="input-group input-medium date date-picker" data-date-format="dd-mm-yyyy" data-date-start-date="+0d" >
                              <input type="text" className="form-control" readOnly="" />
                            </div>
                            <label>Montant Verse</label>
                            <div className="input-group input-medium date date-picker" data-date-format="dd-mm-yyyy" data-date-start-date="+0d" >
                              <input type="text" className="form-control" readOnly="" />
                            </div>
                          </Col> 
                        </Row>
                        </div>
                      </form> 
                    </div>
                  </div>
                </Col>   
              </Row>  
            </Col>
          </Row>
        </div>
		)
	}
}

module.exports = ReactDOM.render(<Form />, document.getElementById('content'));