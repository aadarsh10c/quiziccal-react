import React from "react";

export default function Options (props){
    return(
        <div className="option">
            <input type="radio" 
            className="option-radio"
            id={props.option}
            value={props.option}
             />
            <label htmlFor={props.option} className="option-label">{props.option}</label>
        </div>
    )
}