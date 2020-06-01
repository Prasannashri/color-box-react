import React , { Component } from 'react';
import {choice }  from './helpers'
import './Box.css'
class Box extends Component {
    static defaultProps = {
        allColors : [
            "red","blue","darkslateblue","purple","green","yellow","slateblue","violet"
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            bgColor : choice(this.props.allColors) 
        }
    }
    pickColor = () =>{
        let newColor;
        do{
            newColor = choice(this.props.allColors);
        } while(newColor === this.state.bgColor)
        this.setState({bgColor : newColor})
    }
    render(){
        return (
            <div className="Box" style={{backgroundColor:this.state.bgColor}} onClick={this.pickColor}>
            </div>
        )
    }
}
export default Box;