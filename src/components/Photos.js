import React, { useEffect, useState } from "react";
import axios from "axios";
import IOD from "./IOD";

export default function Photos(){
    const[photo, setPhoto] = useState([]);
    
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
            .then(resp => {
                const photo = resp.data;
                console.log("got em", photo);
                setPhoto(photo);
            })
            .catch(error => {
                console.log("whoops", error);
            });
    },[]);

    return (
        <div className="photo">
            <IOD 
            title= {photo.title}
            picture= {photo.url}
            date= {photo.date}
            description= {photo.explanation}
            />
        </div>
    )
}