/**
 * Created by khm@med on 29/12/17.
 * frontEnd file
 */

import React, {Component} from 'react';


function Head(props){

    const title = props.title;
    const page = props.page;

    return(

        <head>
            <title>{title} - {page}</title>
            <link rel="stylesheet" type="text/css" href="/css/screen.css" />
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
        </head>
    )    
}


class HTML extends Component {

    constructor(props){

        super(props);
    }

    render(){


        return(
            <html lang="en">
                
                <Head title={this.props.title} page={this.props.page} />
                <body>                    
                    <div id="MedApp" />
                    <script src={this.props.script} />
                </body>
            </html>
        )
    }
}

module.exports = HTML;