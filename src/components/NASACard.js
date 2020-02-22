import React from "react";
import {
    Card, CardImg, CardText, CardBody, CardLink,
    CardTitle, CardSubtitle, Container, Button
  } from 'reactstrap';

const NASACard = props =>{
    // return(
    //     <div className = "apod-list">
    //         <img className = "apod-image" alt="Image of APOD" src={props.url}/>
    //         <h2>{props.title}</h2>
    //         {/* <p>{props.service_version}</p> */}
    //         {/* <p>{props.media_type}</p> */}
    //         {/* <img className = "apod-image" alt="Image of APOD" src={props.hdurl}/> */}
    //         <p>{props.date}</p>
    //         <p>{props.explanation}</p>
    //     </div>
    // )

    return (
        <Card style={{ margin: '15px auto', width: '50%', border: 'solid pink' }}>
            <CardBody style={{ backgroundColor: 'lightblue' }}>
                <CardTitle style={{fontWeight: 'bold'}}>
                    {props.title}
                </CardTitle>
                <CardSubtitle>
                    {props.date}
                </CardSubtitle>
                {/* <CardBody>
                    <Button style={{margin: '5px'}} onClick="props.day--">Yesterday</Button>
                    <Button style={{margin: '5px'}} onClick="props.day++">Tomorrow</Button>
                </CardBody> */}
            </CardBody>
            <CardImg className="apod-image" alt="Image of APOD" src={props.url} />
            <CardBody style={{ backgroundColor: 'crimson' }}>
                <CardText>
                    {props.explanation}
                </CardText>
            </CardBody>
        </Card>
    )
}

export default NASACard;