import React from "react"
import {render} from "react-dom"
import styled, {keyframes} from "styled-components"
import Section from "./Section"
import Content from "./Content"
import Footer  from "./Footer"


const Logo = styled.img`
	width : 150px;
	height: 150px;
`
const Img= styled.img`
	width : 100%;
	height: 500px;
`
const Toparea= styled.div`
	transition: all .4s ease-in-out;
    width: 100%;
    color: #fff;
    background-color : #a6d330;
`
const blinkEmergencyPhone = keyframes`
	0%  {color: white}
	49% {color: white}
	50% {color: red }
`
const PhoneEmergency = styled.span`
	animation : ${blinkEmergencyPhone} 2s linear infinite;
`
const Navbar = styled.nav`
	width: inherit;
	font-size : 18px;
	margin: 0 auto;
	padding-bottom:0;
	box-shadow: 0 0 3px rgba(0,0,0,0.12);
	box-shadow: 0 1px 6px rgba(0,0,0,.2); 
	-webkit-box-shadow: 0 1px 6px rgba(0,0,0,.2); 
	-moz-box-shadow: 0 1px 6px rgba(0,0,0,.2); 
	-o-box-shadow: 0 1px 6px rgba(0,0,0,.2); 
`
const Brand = styled.a`
	padding : '0',
    margin : '0',
    height : '100% !important'
`
const Box = styled.div`
	& > i {
		border-radius: 50%;
	    display: inline-block;
	    color: #fff;
	    width: 1.6em;
	    height: 1.6em;
	    text-align: center;
	    line-height: 1.6em;
	    margin-bottom: 30px;
	    background : #a6d330;
	    padding-top: 25px;
	}
`
const SubFooter = styled.div`
	margin-top: 30px;
    background-color: #f7f7f7;
    border-top: 1px solid #ddd;
    padding: 30px 0 10px;
`
const SocialCompany = styled.ul`
	
	list-style: none;
    margin-left: 0;
    padding-left: 0;

	& > li {
		margin: 0;
		padding: 0;
		display: inline-block;
		& > a {
			text-shadow: none;
    		color: #337ab7;
    		margin: 0 2px 0 0;
    		& > i {
				width: 40px;
			    height: 40px;
			    line-height: 40px;
			    text-align: center;
			    color: #fff;
			    text-align: center;
			    border-radius: 3px;
			    padding: 10px 0 0;

			    &.fa-facebook {background: #3873ae;}
			    &.fa-twitter {background: #62c6f8;}
			    &.fa-google-plus {background: #000;}
			    &.fa-vimeo-square {background: #51a6d3;}
			    &.fa-dribbble {background: #d74980;}
			}
		}
	}
`
const Boxes = ({rubrics})=>(

	rubrics.map(rubric =>
		(
			<Content classes="col-sm-3 col-md-3">
				<Box className="box text-center">
				    <i className={rubric.font}></i>
				    <h4 style={{fontSize: '25px',	fontWeight: 'bold'}} > {rubric.title} </h4>
				    <p> {rubric.body} </p>
				</Box>
			</Content>
		)
	))

const Nav = ()=>(

	<Navbar className="navbar navbar-custom navbar-fixed-top top-nav-collapse" 
			style={{
				backgroundColor: 'white'
			}}
	>
      <Toparea>

        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-md-6"> Lundi - Samedi, 08h a 18h </div>
            <div className="col-sm-6 col-md-6" 
            	 style={{
            	 	textAlign : 'right'
            	 }}
            >
            	<PhoneEmergency>Urgence 24/24 - 7/7 : 00 (212)637521701</PhoneEmergency>
            </div>
          </div>
        </div>

      </Toparea>
      <div className="container navigation" style={{height : '80px', backgroundColor: 'white'}}>

        <div className="navbar-header">
          <a>
            <img src="/img/logoLaboFes.svg" alt="" width="100" height="100" />
          </a>
        </div>

        <div className="navbar-collapse navbar-right" 
        	 style = {{
          	 	padding : '0',
          	 	marginTop : '25px'
          	 }}
        >
          <ul className="nav navbar-nav">
            <li className=""><a href="#intro">Acceuil</a></li>
            <li className="active"><a href="#service">Patient</a></li>
            <li className=""><a href="#doctor">Professionel</a></li>
            <li><a href="#facilities">Galerie</a></li>
            <li><a href="#pricing">Contact</a></li>
          </ul>
        </div>

      </div>
    </Navbar>)

const App =()=>(
	<div>
		<Section id="Header">
			<Nav />
		</Section>
		<Section 
			id="carrousel" 
			classNames="carousel" 
			height={500} 		>
			<Img src="/img/lab1.jpg" />
		</Section>	
		<Section classNames="home" classContainer="container">
			<div className="row">
				<Boxes rubrics = {[
					{
						title : "Prendre un RendezVous",
						font : "fa fa-calendar fa-3x",
						body : 'Vous Voulez Prendre un Rendez-Vous Clicker ici'
					},{
						title : "Assistance immediat",
						font : "fa fa-user-md fa-3x",
						body : "Parler avec nous en direct"
					},{
						title : "Avant de venir au Labortoire",
						font : "fa fa-check fa-3x",
						body : "Clicker ici pour verifier les conditions de prelevement et les documents a apporter avec vous"
					},{
						title : "Prelevement a Domicile",
						font : "fa fa-tint fa-3x",
						body : "Nous désirons offris un service de prise de sang à domicile, à votre travail ou à notre centre selon votre disponibilité sans temps d'attente car votre heure de rendez-vous est respectée."
					}
				]}/>
			</div>
		</Section>
		<Footer>
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-md-4">
						<h3>Espace Patient</h3>
						<ul style={{'listStyle' : 'none', 'padding': '0'}}>
							<li>Notre Mission</li>
							<li>Nos Engagements</li>
							<li>Notre Offre</li>
							<li>Mon Laboratoire</li>
							<li>Mes Resultats</li>
						</ul>
						<h3>Espace Professionnels</h3>
						<ul style={{'listStyle' : 'none', 'padding': '0'}}>
							<li>Notre Mission</li>
							<li>Nos Engagements</li>
							<li>Notre Offre</li>
							<li>Nos Catalogues des analyses</li>
							<li>Votre Serveur de Resultats</li>
							<li>Notre Actualité Pratique</li>
						</ul>

					</div>
					<div className="col-sm-6 col-md-4">
						<h3>Contact</h3>
						<span>Laboratoire Fes d' Analyses Médicales : Bd Bir Anzarane , lot n°8, résid. Nour, bur. n°11, Atlas, 30000 FES</span>
					</div>
					<div className="col-sm-6 col-md-4">
						<h3>Information</h3>
						<span>Analyses biologiques, diagnostic de laboratoires cliniques, biochimie clinique, hématologie, biochimie, bactériologie, virologie, sérologie, hormonologie, mycologie, parasitologie, toxicologie, test de fertilité et spérmiologie.</span>
						<h3>Suivez Nous</h3>
						<SocialCompany>
                  			<li className="social-facebook"><a href="#"><i className="fa fa-facebook"></i></a></li>
		                  	<li className="social-twitter"><a href="#"><i className="fa fa-twitter"></i></a></li>
		                  	<li className="social-google"><a href="#"><i className="fa fa-google-plus"></i></a></li>
		                  	<li className="social-vimeo"><a href="#"><i className="fa fa-vimeo-square"></i></a></li>
		                  	<li className="social-dribble"><a href="#"><i className="fa fa-dribbble"></i></a></li>
		                </SocialCompany>
					</div>
				</div>
			</div>
			<SubFooter>
		        <div className="container">
		          <div className="row">
		            <div className="col-sm-6 col-md-6 col-lg-6">
		              <div className="wow fadeInLeft animated">
		                <div className="text-left">
		                  <p>©Copyright - khm(@)med. All rights reserved.</p>
		                </div>
		              </div>
		            </div>
		            <div className="col-sm-6 col-md-6 col-lg-6">
		              <div className="wow fadeInRight animated">
		                <div className="text-right">
		                  <div className="credits">
		                    <p>Designed by <a href="https://khmamed.com/">KHM@MED Co(r)p.</a></p>
		                  </div>
		                </div>
		              </div>
		            </div>
		          </div>
		        </div>
		    </SubFooter>
		</Footer>
	</div>)

module.exports = render(<App />, document.getElementById('MedApp'))