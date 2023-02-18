import React from "react"
import Start from './Start'
import Quiz from "./Quiz"

export default function Container(){
    return(
        <div className="container">
            <Start />
            <Quiz />
        </div>
    )
}