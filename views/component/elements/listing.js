import React,{Component} from 'react';
import {DefaultList, ListItem} from '../../ui/StListing';

export class Listing extends Component {

	constructor(props){
		super(props);

        this.state = {
            NumOfTests : this.props.NumOfTests,
            Bilan : []
        }

        this.handleCheckedTest = this.handleCheckedTest.bind(this);
	}

	handleCheckedTest(e){

        let isChecked = e.target.checked;

        if(isChecked){

            this.setState({NumOfTests : this.state.NumOfTests+1}) ;

            this.state.Bilan[this.state.NumOfTests] = e.target.value;
        }

        console.log(this.state.Bilan);
        console.log(this.state.NumOfTests);
	}
	render(){

		return(

			<DefaultList>      		
                <div className="list-container">
                    <ul>{this.props.list.map((data)=>
                        <ListItem key={data}>
                            <div className="list-icon-container">
                                <input type="checkbox" value={data} onChange={this.handleCheckedTest} />
                            </div>                            
                            <div className="list-datetime"> 120 MAD </div>
                            <div className="list-item-content">
                                <p>{data}</p>
                            </div>
                        </ListItem>                                                 
                    )}</ul>
                </div>
            </DefaultList>                              

		)
	}
}

function ListHeader(props){

	return(

		<div className="mt-list-head list-default green-haze">
                    <div className="row">
                        <div className="col-xs-8">
                            <div className="list-head-title-container">
                                <h3 className="list-title uppercase sbold">Default List</h3>
                                <div className="list-date">Nov 8, 2015</div>
                            </div>
                        </div>
                        <div className="col-xs-4">
                            <div className="list-head-summary-container">
                                <div className="list-pending">
                                    <div className="badge badge-default list-count">3</div>
                                    <div className="list-label">Pending</div>
                                </div>
                                <div className="list-done">
                                    <div className="list-count badge badge-default last">2</div>
                                    <div className="list-label">Completed</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
	)
}

function ListTitle(props){

	return(
		<div className="mt-list-title uppercase">My List
                        <span className="badge badge-default pull-right bg-hover-green-jungle">
                            <a className="font-white" href="javascript:;">
                                <i className="fa fa-plus"></i>
                            </a>
                        </span>
                    </div>
	)
}