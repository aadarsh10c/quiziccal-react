import React from "react";
import Options from './Options'

export default function QuizReact(props){

    const [ quizData , setQuizData ] = React.useState([])

    React.useEffect(() => {
        async function getQuizData (){
            console.log('inside function')
            let response = await fetch("https://opentdb.com/api.php?amount=10&difficulty=medium")
            let data = await response.json()
            console.log( data.results )
            setQuizData( data.results )
        }
        getQuizData()
    },[])

    // function handleChange(e){
    //     console.log("clicked !!!")
    //     let newValue = e.target.value;
    //     setGender(newValue)
    //   }

    // function handleSubmit( e ){
    //     e.preventDefault()
    //     alert( `form submitted ! new name: ${radio}`)
    // } 

    const quizQuestionList = (() => {
        return quizData.map( item => {
            //create option array
           let optionArray = [ item.correct_answer , ...item.incorrect_answers ]
           //genrate random option values
           let nums = new Set()
            while( nums.size != optionArray.length){
                nums.add( Math.floor( Math.random() * 4) )
            }
            let randomArray = [ ...nums ]
            const optionList = randomArray.map( optionIndex => <Options  option={ optionArray[optionIndex] } /> )
           return (
           <div className="quiz__question">
                <h3 className="question__desc">
                    {item.question}
                </h3>
                <div className="question__options">
                    {optionList}
                </div>
            </div>
            )
        })
        

    })()

    return(
        <form action="#" className="quiz">
            {quizQuestionList}
        </form>
    )
}