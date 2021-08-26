import { Card, Col, Button } from "react-bootstrap"

const MyCard = (book) => {
  console.log(book.book)
  return (
          <Col xs="12 mb-2" md="3" lg="2" key={book.book.asin}>
          <Card className="h-100">
            <Card.Img variant="top" src={book.book.img}/>
            <Card.Body className="d-flex flex-column justify-content-end p-2">
              <Card.Title className="mb-auto h6">{book.book.title}</Card.Title>
              <Card.Text>{book.book.category} </Card.Text>
              <small className="font-weight-bold">Asin: {book.book.asin}</small>
              <Button variant="info">Read</Button>
            </Card.Body>
          </Card>
      </Col>
    )
}

export default MyCard