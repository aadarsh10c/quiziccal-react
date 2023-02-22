import React from "react";
import {BlobA  ,  BlobB  } from './Blobs'
import QuizForm from './QuizForm'
// import  BlobA from '../src/assets/Polygon_1.svg'
// import BlobB from '../src/assets/Polygon_2.svg'

export default function Quiz(){

    return(
        <div className="start quiz">
             <BlobA  width="10" height="10" />
             <QuizForm  />
             <BlobB  width="10" height="10" />           
        </div>
    )
}