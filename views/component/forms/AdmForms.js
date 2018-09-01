import React, {Component} from 'react';
import {
  Row,
  Col,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Form,
  FormGroup,
  FormText,
  Label,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupButton
} from 'reactstrap';
import {LightPortlet, PortletBody} from '../../styles/Portlet';
import {BtnIcon} from '../../styles/Button';

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {

      factor : 1.34,
      Bcode : ''

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({Bcode : e.target.value})
  }

  render() {
    return (

      <div className="animated fadeIn">
        
        <Row>          
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
                      <Input onChange={this.handleChange} value={this.state.Bcode} name="Bcode" placeholder="B code"/>
                      <FormText color="muted">write B code</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label>Default Factor</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" placeholder={this.state.factor} disabled/>
                      <FormText className="help-block">this is a default factor</FormText>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md="3">
                      <Label >Price</Label>
                    </Col>
                    <Col xs="12" md="9">
                      <Input type="number" name="Price" placeholder={Math.ceil(this.state.factor * this.state.Bcode)} disabled/>
                      <FormText className="help-block">Price is Bcode multiply factor</FormText>
                    </Col>
                  </FormGroup>
                </Form>
          </Col>
        </Row>
      </div>
    )
  }
}


export default Forms;
