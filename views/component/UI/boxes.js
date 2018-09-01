import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Boxes extends Component {


	render(){

		return(

			<p>this is boxes Components</p>
		)
	}
}

module.exports = ReactDOM.render(<Boxes />, document.getElementById('boxes'));