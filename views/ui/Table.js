/**
 * Created by khm@med on 06/01/18.
 */

import React, {Component} from 'react';
import {render} from 'react-dom';
import axios from 'axios';
import {
    Nav,
    NavItem
} from 'react-bootstrap';
import ReactTable from 'react-table';


class Table extends Component {

    constructor(){
        super();
        this.state = {
          data : []
        }
        //this.fetchData = this.fetchData.bind(this);
    }

    componentDidMount(){

      axios.get('/Lab/tests')
           .then(response => {
                this.setState({ data : response.data.data})    
            })
           .catch(function (error) {
                console.log(error);
            });
      }

    render(){

        const data = this.state.data

        return (


            <div className="page-content">

                <ReactTable

                  data = {data}
                  columns={[
                    {
                      Header: "tests Medical",
                      columns: [
                        {
                          Header: "Code",
                          accessor: "code",
                          maxWidth : 50
                        },
                        {
                          Header: "test",
                          id: "test",
                          accessor: d => d.test
                        }
                      ]
                    }
                  ]}
                  defaultPageSize={100}
                  className="-striped -highlight"
                />

            </div>    
        )
    }
}

module.exports = render(<Table />, document.getElementById('content'));