import React , {Component } from 'react';
import Box from './Box';
import './Boxcontainer.css'
class Boxcontainer extends Component {
    static defaultProps = {
        maxbox : 18
    }
    render(){
        const boxes = Array.from({length : this.props.maxbox}).map( () => (
            <Box />
        ));
        return(
            <div className ="Boxcontainer"> { boxes }</div>
        )
    }
}
export default Boxcontainer;