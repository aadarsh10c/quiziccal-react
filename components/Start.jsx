import React from "react";
import {BlobA  ,  BlobB  } from './Blobs'
// import  BlobA from '../src/assets/Polygon_1.svg'
// import BlobB from '../src/assets/Polygon_2.svg'

export default function Start(){
    return(
        <div className="start">
            <BlobA />
            <h1 className="start__header">
                Quizzical
            </h1>
            <h3 className="start__desc">
                Some description if needed
            </h3>
            <a href="#" className="start__btn">
                Start quiz
            </a>
            <BlobB />
        </div>
    )
}