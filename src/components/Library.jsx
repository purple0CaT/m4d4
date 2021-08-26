import SciFi from '../data/scifi.json'
import Fantasy from '../data/fantasy.json'
import History from '../data/history.json'
import Romance from '../data/romance.json'
import Horror from '../data/horror.json'
// import MyCard from './MyCard'
import { Component } from 'react'
// import { Container ,Row, Col } from "react-bootstrap"

class Library extends Component{

    state = {
        allLibrary: [SciFi, Fantasy, Horror, History, Romance]
    }
    
    render(){
        console.log(this.allLibrary)
        return(

        <div>
        {/* {Object.keys(this.allLibrary).map(book => console.log(book))} */}
        </div>
        )}
}
export default Library