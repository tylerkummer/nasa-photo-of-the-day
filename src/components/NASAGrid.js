import React, {useState, useEffect} from "react";
import NASACard from "./NASACard";
import axios from "axios";

export default function NASAGrid(){
    const [apods, setApods] = useState([]);
    
    const [date, setDate] = useState('&date=2012-03-14');

    useEffect(() => {
        axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=ZKJjBUrmoB7zo92aSRTbzdtRCVCbtZNW3d41ZcGp${date}`)
            .then(response => {
                console.log("The data is ", response.data);
                setApods(response.data);
            })
            .catch(error => {
                console.log("Error found ", error);
            })
    }, []);

    return (
        <div className="container">
            {/* {apods.map(apod => {
                return(
                    <NASACard
                        date = {apod.date}
                        explanation = {apod.explanation}
                        hdurl = {apod.hdurl}
                        media_type = {apod.media_type}
                        service_version = {apod.service_version}
                        title = {apod.title}
                        url = {apod.url}
                    />
                );
            })} */}

                <NASACard
                    date = {apods.date}
                    explanation = {apods.explanation}
                    hdurl = {apods.hdurl}
                    media_type = {apods.media_type}
                    service_version = {apods.service_version}
                    title = {apods.title}
                    url = {apods.url}
                />
            
        </div>
    );
}