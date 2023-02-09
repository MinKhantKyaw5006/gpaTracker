import React from "react"
import "./averageGPA.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function AverageGPA({myGPA, result}) {
    return (
        myGPA.length != 0 && 
            <h2>Average GPA - {result}</h2> 
    )
}