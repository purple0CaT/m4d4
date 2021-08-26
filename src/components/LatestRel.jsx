import SciFi from '../data/scifi.json'
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Horror from '../data/horror.json'
import SingBook from './MyCard'
import { Container ,Row, Col } from "react-bootstrap"
import Library from './Library'
import React from 'react'
import Category from './Category'

class LatestRel extends React.Component{
    state = {
      SciFi, Fantasy, History, Romance, Horror
    }
    render(){
    return (
    <>
      <Container>
        <Library/>
        <Row className="justify-content-center">
        <Col xs="12">
          <h3>Latest Releases</h3>
          <hr />
        </Col>
        {/* <MyCard data={History[0]} />
        <MyCard data={Horror[0]} />
        <MyCard data={Romance[0]} />
        <MyCard data={Fantasy[0]} />
        <MyCard data={SciFi[0]} /> */
        Object.values(this.state).map(categor => <SingBook book={categor[0]}/>)
        }
        
        </Row>

        <Row >
        {
          Object.values(this.state).map(categor => <Category categor={categor}/>)
        }
        </Row>
      </Container>
    </>
    )}
}

export default LatestRel