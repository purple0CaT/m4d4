
import { Button } from "react-bootstrap";
import React from "react";
import Comments from "../comment";

class CommentArea extends React.Component{
    state= {
        reservations: [],
        comentArr: true,
        asin: this.props.asin,
        loaded: false
          }

  async componentDidMount() {
        try {
          const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.state.asin, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4"            }
        });
          const data = await response.json()
          this.state.reservations = data
          this.setState({loaded : true})
          console.log(this.state.reservations)
        } catch(e) {
          console.log(e);
        }
      }

render(){

    return(
<>
    <Button variant="secondary" onClick={this.loadComent}>Comments</Button>
    <div className='comments' style={{ display: this.state.comentArr ? 'block' : 'none' }}>
    {
    this.state.loaded ? <Comments comentArr = {this.state.reservations[0].comment}/>
    : <div>none</div>
    }
    </div>
</>
    )
}}

export default CommentArea