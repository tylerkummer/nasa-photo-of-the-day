import React, {useState, useEffect} from "react";
import NASACard from "./NASACard";
import DayIncrease from './Day';
import axios from "axios";

export default function NASAGrid(){
    const [apods, setApods] = useState([]);
    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();
    let now = `${year}-${month}-${day}`;
    const [date, setDate] = useState(`&date=${now}`);

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
            <NASACard
                date = {apods.date}
                explanation = {apods.explanation}
                hdurl = {apods.hdurl}
                media_type = {apods.media_type}
                service_version = {apods.service_version}
                title = {apods.title}
                url = {apods.url}
            />
            {/* <DayIncrease>
                day = {day};
            </DayIncrease> */}
        </div>
    );
}