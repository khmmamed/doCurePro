import React, {Component} from 'react';
import { AdmPageContent } from '../admLayout';
import axios from 'axios';

//Load Styled component
import styled from 'styled-components';

import { Link } from "react-router-dom";

import {Table} from '../../styles/Table';

//Styling page bar 
const PageBar = styled.div`
    
    border-bottom: 1px solid #e7ecf1;
`;

const PageBarList = styled.ul`
    
    display: inline-block;
    padding: 8px;
    margin: 0;
    list-style: none;
`;

const PageBarListItem = styled.li`
    
    display: inline-block;
`;

export const Svg = (props)=>(
  <svg version="1.1" id="L7" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 100 100" enableBackground="new 0 0 100 100" space="preserve" width="100px" height="100px">
    <path fill="#a5bd42" d="M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z" transform="rotate(64.6435 50 50)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
    </path>
    <path fill="#a5bd42" d="M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z" transform="rotate(-129.287 50 50)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="1s" from="0 50 50" to="-360 50 50" repeatCount="indefinite"></animateTransform>
    </path>
    <path fill="#a5bd42" d="M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z" transform="rotate(64.6435 50 50)">
      <animateTransform attributeName="transform" attributeType="XML" type="rotate" dur="2s" from="0 50 50" to="360 50 50" repeatCount="indefinite"></animateTransform>
    </path>
  </svg>
)

const RespTable =(props)=>(

    <Table className="table table-striped table-condensed">
        <tbody>
            {props.list.map((data)=>
                <tr key={data.test}>
                    <td key={data.test}><Link to={'/khmmamed/eLab/tests/'+data.test}>{data.test}</Link></td>
                    <td className="update">Update [{data.update.length}]</td>
                </tr>   
            )}
        </tbody>
    </Table>
)

export class AdmListAllTests extends Component{

    constructor(props){

        super(props);
        this.state = {

            table : '',
            tests : []
        }

    }

    componentDidMount(){
    
        axios.get('/user/eLab/tests')
            .then(response => {
                this.setState({tests : response.data }) ;

            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render(){

        return(
            <AdmPageContent> 
                
                <PageBar>
                    <PageBarList>
                        <PageBarListItem>
                            <a href="/khmmamed">Home</a>
                            <i class="fa fa-arrow"></i>
                        </PageBarListItem>
                        <PageBarListItem>
                            <span>Charts</span>
                        </PageBarListItem>
                    </PageBarList>
                </PageBar>

                <h1 className="page-title"> Test Listing 
                    <small> All Lab Procedures</small>
                </h1>

                <div>
                    {this.state.tests.length>0 ? <RespTable list= {this.state.tests}/> : <Svg></Svg> }
                </div>    

            </AdmPageContent>            
        )
    }
}