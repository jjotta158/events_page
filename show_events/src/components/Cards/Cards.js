import React from 'react'
import {useSelector} from 'react-redux'

import './style.css'
import {Row, Col} from 'react-bootstrap'

const Card = ({img, title, date}) => {
    
    if (img === "" || img === "" || typeof img === "undefined") {
        img = "logo.png"
    }

    return(
        <div className="Card">
            <div className="image-box" style={{ backgroundImage: `url(${require("../../assets/images/" + img)})`}}>

            </div>
            <div className="data-box">
                <h3>{title}</h3>
                <span><span>{date.start}</span> - <span>{date.end}</span></span>
            </div>
        </div>
    )
}

const Cards = () => {
    const events = useSelector(state => state)
    return (
       <Row id="cards">
           {events.map((event, index) => {
               return (
                   <Col lg="3" md="4" sm="6" xs="12" key={index}>
                        <Card img={event.image} title={event.title} date={{start:event.startDate, end:event.endDate}}></Card>
                    </Col>
               )
           })}
       </Row>
    )
}

export default Cards;