import React from "react";
import {BlobA  ,  BlobB  } from './Blobs'
// import  BlobA from '../src/assets/Polygon_1.svg'
// import BlobB from '../src/assets/Polygon_2.svg'

export default function Quiz(){
    const [ quizData, setQuizData ] = React.useState( [] )
    console.log( quizData )
    React.useEffect(() => {
        console.log( 'effect ran')
        async function getQuizData () {
            let rawData = await fetch('https://opentdb.com/api.php?amount=10&difficulty=medium');
            let data = await rawData.json()
            setQuizData( data.results )
        }
        getQuizData()
    },[])

    return(
        <div className="start quiz">
             <BlobA  width="10" height="10" />
            <BlobB  width="10" height="10" />           
        </div>
    )
}