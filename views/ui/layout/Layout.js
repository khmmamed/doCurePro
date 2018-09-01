import React, {Component} from 'react';


export class LayoutHeader extends Component {

	constructor(props){

		super(props);
	}

	render(){

		return(

			<header id="header">
                {this.props.children}                
            </header>  
		)
	}
}

export class LayoutHeadmap extends Component{

    constructor(props){

        super(props);
    }

    render(){

        return(

            <div className="headmap">
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export class LayoutMain extends Component{

    constructor(props){

        super(props);
        this.state ={

            home : sLayout.Lmain.front.home
        }
        //this.setState({ home : this.props.home ? sLayout.Lmain.front.home : false });
    }

    render(){

        return(

            <section id="main" style={this.state.home}>            
                {this.props.children}
            </section>
        )
    }
}

export class LayoutContainer extends Component{

    constructor(props){

        super(props);
    }

    render(){

        return(

            <div className="container">
                
                    {this.props.children}
                
            </div>
        )
    }
}

export class LayoutContent extends Component{

    constructor(props){

        super(props);
    }

    render(){

        return(

            <div className="content">{this.props.children}</div>
        )
    }
}

export class LayoutFooter extends Component{

    constructor(props){

        super(props);
    }

    render(){

        return(

            <footer>{this.props.children}</footer>
        )
    }
}

const sLayout = {

    Lmain : {

        front : {

            home : {

                marginTop : 120,
                marginBottom : 15
            }
        }
    }
}