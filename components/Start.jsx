import React from "react";
import  BlobA from '../src/assets/Polygon_1.svg'
import BlobB from '../src/assets/Polygon_2.svg'

export default function Start(){
    return(
        <div className="start">
            <div className="start__blobA">
                <img src={BlobA} class="start__blobA-img" alt="Blob" />
            </div>
            <h1 className="start__header">
                Quizzical
            </h1>
            <h3 className="start__desc">
                Some description if needed
            </h3>
            <a href="#" className="start__btn">
                Start quiz
            </a>
            <div className="start__blobB">
                <img src={BlobB} class="start__blobB-img" alt="Blob2" />
            </div>
        </div>
    )
}