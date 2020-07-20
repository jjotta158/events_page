import React from 'react'
import { Carousel, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import './style.css'

const Slide = ({img, title, description, date}) => {
    const clearImageName = (img) => img.replace("./", "")
    const formateDate = (date) => moment(date).format("DD/MM/YYYY")

    return (
        <Row className="slide">
            <Col lg="4" md="3" sm="12">
                <div style={{ backgroundImage: `url('${require('../../assets/images/' + clearImageName(img))}')`}} className="imageSide">
                   <div className="dataBox">
                        <h2>{title}</h2>
                        <span><span>{formateDate(date[0])}</span></span>
                   </div>
                </div>
            </Col>
            <Col lg="8" md="9" sm="0" xs="0">
                <div className="dataSide">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <span><span>{formateDate(date[0])}</span></span>
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
        <Carousel indicators={false}>
            {events.map(event => {
                return(
                    <Carousel.Item>
                        <Slide img={event.image} title={event.title} description={event.description} date={[event.start, event.end]}></Slide>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    )
}

export default Slider