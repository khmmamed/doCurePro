import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {OutlineButt} from './component/UI/Buttons';
import {Forms, sForms} from './component/forms/Forms';
import './Login.css';
import './styles/components.css';



class InputEmail extends Component {
	render(){

		return(

			<div className="form-group form-md-line-input form-group form-md-line-input form-md-floating-label">
		        <input  type="email" 
		          className={this.props.className} 
		          value={this.props.value}
		          onChange={this.props.onChange}/>
		        <label>Enter your email</label>
		        <span className="help-block">{this.props.help}</span>
		    </div>
		)
	}
}

class InputPassword extends Component{
	render(){
		return(
			<div className="form-group form-md-line-input form-group form-md-line-input form-md-floating-label">
		        <input  
		          type="password" 
		          className={this.props.className} 
		          value={this.props.value}
		          onChange={this.props.onChange}/>
		        <label>Enter your password</label>
		    </div>
		)
	}
}
class Login extends Component {

	constructor(props){

		super(props);
		this.state = {

			email : '',
			password : '',
			emailVerificationMessage : 'Example@domaine.com',
			open: false,
			disabled : true,
			btnName : 'Next'
		};
		this.handleSignIn = this.handleSignIn.bind(this);
		this.checkEmail = this.checkEmail.bind(this);
		this.handleBtnClick = this.handleBtnClick.bind(this);

	}

	handleSignIn(e){
		const target= e.target;
		if(target.type == 'email' ) {
			this.setState({email: target.value});
			this.checkEmail(target.value)}
		if(target.type == 'password' ) this.setState({password: target.value})
	}
	
	handleBtnClick(){

		this.state.btnName == 'Next' ?
			this.setState({
				open : !this.state.open,
				btnName : 'Submit'
			}) :
			axios.post('/users',{
					email:this.state.email,
					password:this.state.password
				})
				 .then(response => {
				 	response.data.msg = 'success' ? window.location.href='./' : window.location.href='./elab'
				 })
				 .catch(error => {
				 	console.log(error)
				 });
	}
	
	checkEmail(email){

		axios.get('/users/'+email)
	           .then(response => {
	                response.data.user == null ? this.setState({emailVerificationMessage:"Sorry this Email doesn't exist"})
	                :
	                	this.setState({
	                		emailVerificationMessage:"Hi "+response.data.user+" write your password",
	                		disabled : false
	                	})
	            })
	           .catch(function (error) {
	                console.log(error);
	            });
	}

	render(){

		return(
			
			<div>				
				<section id="form" >
					<div className="container">
						<div className="row">
							<div className="col-sm-12 col-xs-12 col-md-6 col-lg-6">
							<h2>Welcome to MedApp </h2>
								<InputEmail 
									className={this.state.inputEdited = this.state.email? "form-control edited" : "form-control"}
									value={this.state.email}
									onChange={this.handleSignIn}
									help={this.state.emailVerificationMessage}
								/>

	                            <div className={this.state.open?'basket' : 'basket hide'}>
	                            	<InputPassword 
	                            		className={this.state.inputEdited = this.state.password? "form-control edited" : "form-control"}
	                            		value={this.state.password}
	                            		onChange={this.handleSignIn}
	                            	/>	                        
								</div>
								<OutlineButt name={this.state.btnName} onClick={this.handleBtnClick} disabled={this.state.disabled}/>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

module.exports = ReactDOM.render(<Login />, document.getElementById('MedApp'));