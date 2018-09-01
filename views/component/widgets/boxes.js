import React, { Component } from 'react';
import './boxes.css';
import './colors.css'

export class SmallBox extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="small-box bg-aqua">
        <div className="inner">
          <h3>
              {this.props.title}
          </h3>
          <p>
              {this.props.body}
          </p>
        </div>
        <div className="icon">
          <i className="fa fa-bag"></i>
        </div>
        <a href={this.props.link} className="small-box-footer">
          {this.props.footer} <i className="fa fa-arrow-circle-right"></i>
        </a>
      </div>
    )      
  }
}


export class Boxes extends Component {
  constructor(props){
    super(props);

  }

  render() {
    return (
      <div className="Boxes"></div>
    )      
  }
}
