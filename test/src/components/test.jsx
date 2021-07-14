import React, { useEffect, useRef, useState } from 'react'
import './test.css'
import TestAnswers from './testAnswers'

export default function Test({ add, subtraction, id, test }) {
    const [correctAnswer, setCorrectAnswer] = useState()
    const [allAnswers, setAllAnswers] = useState([])
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const prevAnswer = useRef('')
    function checked(e) {
        setSelectedAnswer(e)
        if(prevAnswer.current == correctAnswer){
            subtraction() 
        }else if(e == correctAnswer){
            add()
        }
    }
    useEffect(() => {
        prevAnswer.current = selectedAnswer
    })

    useEffect(()=>{
        setCorrectAnswer(test.correct_answer)
        let answersArray = [...test.incorrect_answers]
        if (test.incorrect_answers.length > 2){
            let random = Math.floor((Math.random() * 4))
            answersArray.splice(random, 0, test.correct_answer)
            return setAllAnswers(answersArray)
        } else{
            let booleanRandom = Math.floor(Math.random()*2)
            answersArray.splice(booleanRandom, 0, test.correct_answer)
            return setAllAnswers(answersArray)
        }
    },[])
    return(
        <div className = 'wrapper'>
            <ul className = 'container'>
                <li key = {test.question} className = 'question'>
                    { `${id + 1}. ${test.question}`}
                    {allAnswers.map((event, index)=> <TestAnswers 
                        checked = {checked} 
                        event={event} key={index} 
                        id={id} 
                        index={index}/>)
                    }
                </li>
            </ul>
        </div>
    )  
}