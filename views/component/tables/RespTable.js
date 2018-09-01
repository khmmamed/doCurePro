import React,{Component} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class RespTable extends Component {

	constructor(props){

		super(props);
	}

	render(){


		return(

			<table className="table table-striped table-condensed flip-content">
                <tbody>
                    {this.props.list.map((data)=>
                    	<tr key={data}>
                        	<td key={data}><Link to={'/khmmamed/eLab/tests/'+data}>{data}</Link></td>
                        </tr>	
                    )}                           
                </tbody>
             </table>
		)
	}
}