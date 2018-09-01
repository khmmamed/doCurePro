/**
 * Created by khm@med on 04/01/18.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Button, ButtonGroup, DropdownButton, MenuItem} from 'react-bootstrap';


class Listbuttons extends React.Component {

    constructor(props){

        super(props);
        this.state = {

            express : 'Hello'
        };
        this.updateButton = this.updateButton.bind(this);
    }

    updateButton() {

        axios.get('/api')
            .then(response => {
                this.setState({express : response.data.express});
            })
            .catch(function (error) {
                console.log(error);
            });
    }


    render(){

        return(
            <div>
                <Button bsStyle="info" onClick={this.updateButton}>{this.state.express}</Button>
            </div>
        )
    }
}

module.exports = ReactDOM.render(<Listbuttons />, document.getElementById('bts'));