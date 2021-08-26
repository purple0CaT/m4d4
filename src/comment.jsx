import React from"react"

class Comments extends React.Component{
    state= {
        asin: this.props.asins,
        comments: []
    }

    async componentDidMount() {
        try {
          const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/"+this.state.asin, {
            method: 'GET',
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFjZjcwZDJkNTI2MjAwMTViNmRjOTkiLCJpYXQiOjE2Mjk5ODUyNzMsImV4cCI6MTYzMTE5NDg3M30.XnwP2w8HYgNw7WtHh0tP8haV9jofgQ_UQ9xJOsb01C4"            }
        });
          const data = await response.json()
          this.state.comments = data
          console.log(this.state.comments)
        } catch(e) {
          console.log(e);
        }
      }
render(){
    return(
        <>
        {
        this.state.comments != []
        ? Object.values(this.state.comments).map( comm => {return(
                <>
                <small key={comm._id}className='font-weight-bold'>{comm.author}</small>
                <small>{comm.comment}</small>
                <small>{comm.rate}</small>
                <hr/>
                </>
            )
            })
            : <small>No comments</small>
            
        }
        </>
    )
}
}

export default Comments
