import React from "react";
import  BlobAURL from '../src/assets/Polygon_1.svg'
import BlobBURL from '../src/assets/Polygon_2.svg'

function BlobA ( {width , height} ){

    let dimension ={}
    if (width && height){
        dimension = {
            width:`${width}rem`,
            height: `${height}rem`
        }
    } 

    return(
        <div className="start__blobA" style={dimension}>
            <img src={BlobAURL} class="start__blobA-img" alt="Blob" />
        </div>
    )
}

function BlobB ( {width , height}){
    let dimension ={}
    if (width && height){
        dimension = {
            width:`${width}rem`,
            height: `${height}rem`
        }
    } 
    return (
        <div className="start__blobB" style={dimension}>
            <img src={BlobBURL} className="start__blobB-img" alt="Blob2" />
        </div>
    )    
}

export { BlobA , BlobB }