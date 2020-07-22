import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import './style.css'

const Slide = ({img, title, description, date}) => {    

    return (
        <Row className="slide">
            <Col lg="5" md="3" sm="12">
                <div style={{ backgroundImage: `url('${require('../../assets/images/' + img)}')`}} className="image-side">
                   <div className="data-box">
                        <h2>{title}</h2>
                        <span><span>{date[0]}</span></span>
                   </div>
                </div>
            </Col>
            <Col lg="7" md="9" sm="0" xs="0">
                <div className="data-side">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span><span>{date[0]}</span></span>
                </div>
            </Col>
        </Row>
    )
}

const Slider = ({events}) => {
    const selectImagesThatHaveImage = events => {
        return events.filter( event => {
            if (event.image !== "" && event.image !== null && typeof event.image !== "undefined") {
                return event
            }
        })       
    }
    
    events = selectImagesThatHaveImage(events)
    
    return (
        <Carousel indicators={false} controls={false}>
            {events.map((event, index) => {
                return(
                    <Carousel.Item key={index}>
                        <Slide img={event.image} title={event.title} description={event.description} date={[event.startDate, event.endDate]}></Slide>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Slider