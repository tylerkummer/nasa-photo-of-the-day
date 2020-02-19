import React from "react";

const NASACard = props =>{
    return(
        <div className = "apod-list">
            {/* <img className = "apod-image" alt="Image of APOD" src={props.url}/> */}
            <h2>{props.title}</h2>
            {/* <p>{props.service_version}</p> */}
            {/* <p>{props.media_type}</p> */}
            <img className = "apod-image" alt="Image of APOD" src={props.hdurl}/>
            <p>{props.explanation}</p>
            <p>{props.date}</p>
        </div>
    )
}

export default NASACard;