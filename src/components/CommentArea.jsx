
import { Button } from "react-bootstrap";
import React from "react";
import Comments from "../comment";
import AddComent from "./addComent";

class CommentArea extends React.Component{
    state= {
        reservations: [],
        comentArr: false,
        asin: this.props.asin,
        loaded: false
          }
render(){

    return(
<>
    <Button variant="secondary" onClick={() => this.setState({comentArr : !this.state.comentArr})}>Comments</Button>
    <div className='comments' style={{ display: this.state.comentArr ? 'flex' : 'none' }}>
    
      <Comments asins = {this.state.asin}/>
      <AddComent comAsin = {this.state.asin} bookName={this.state.title}/>
    
    </div>
</>
    )
}}

export default CommentArea