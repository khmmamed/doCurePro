import React,{Component} from 'react';
import {
	Row,
	Col
} from 'reactstrap';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {SideBar} from '../component/Sidebar';
import Forms from '../component/forms/Forms';
import {FrontHeader, FrontTopHeader, FrontMiddleHeader, FrontBottomHeader} from '../component/Header';
import {LayoutHeader, LayoutHeadmap, LayoutMain, LayoutContainer, LayoutContent, LayoutFooter} from '../component/Layout';
import HeadMenu from '../component/HeadMenu';
import Search from '../component/Search';
import {SmallBox} from '../component/widgets/boxes';


function ListTests(props){

    const tests = props.test.map((test)=>
        <Row>
            <Col sm="12">
                <div className="left"><h4 className="name">{test.test}</h4></div>
            </Col>
        </Row>    
    );

    return (
        <div className="productContainer clearfix">
            {tests}
        </div>
    );
}


class Elab extends Component {

	constructor(props){

		super(props);
		this.state = {
            data : [],
            menustyle : {

                color : 'red'
            }
        };
        this.changeColorHeadeMenu=this.changeColorHeadeMenu.bind(this)
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

      changeColorHeadeMenu(){

        this.setState({menustyle:{color : 'blue'}})
      }

	render(){

		return(
            <div>
    			<LayoutHeader>
                    <FrontTopHeader />        
                    <FrontMiddleHeader />    
                </LayoutHeader>
                <LayoutMain>
                    <LayoutHeadmap>map to this page</LayoutHeadmap>
                    <LayoutContainer>
                        <Search />
                    </LayoutContainer>
                </LayoutMain>
            </div>
		)
	}	
} 

module.exports = ReactDOM.render(<Elab />, document.getElementById('MedApp'));