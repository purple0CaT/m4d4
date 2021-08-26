import { Card, Col, Button, OverlayTrigger, Tooltip } from "react-bootstrap";
import React from "react";
import CommentArea from "./CommentArea";


class SingBook extends React.Component {
  state = {
  }
  render()
  {
    let book = this.props.book;
    console.log(book.book);
    return (
      <Col xs="12 mb-2" md="3" lg="2" key={book.asin}>
        <Card className="h-100">
          <Card.Img variant="top" src={book.img} />
          <Card.Body className="d-flex flex-column justify-content-end p-2">
            <Card.Title className="mb-auto h6">{book.title}</Card.Title>
            <Card.Text>{book.category} </Card.Text>
            <small className="font-weight-bold">Asin: {book.asin}</small>
            <div className="d-flex flex-column justify-content-between">
              <Button variant="info mb-3">Read</Button>
              <div className="text-center">
                <CommentArea asin={book.asin}/>
                </div>
            </div>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}

export default SingBook;
