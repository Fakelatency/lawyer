import React from "react";
import downArrow from './downarrow.png';



export default class DownArrow extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <img src={downArrow} class="animate-bounce lg:w-12 lg:h-12 w-0 h-0 invert items-center justify-center mx-auto " onClick={this.props.onClick}/>
        );
    }
}
    
