import { observer } from 'mobx-react-lite'
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TestsContext } from '..'
import { testsAPI } from '../API/Api'
import Test from './test'
import './tests.css'

export default observer( function Tests() {
    const {tests} = useContext(TestsContext)
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0)
    const [testes, setTestes] = useState([])
    const [noResponse, setNoResponse] = useState(false)
    function add() {
        setCorrectAnswersCount(correctAnswersCount+1)
    }
    function subtraction() {
        setCorrectAnswersCount(correctAnswersCount-1)
    }

    useEffect(()=>{
        testsAPI(tests.getUrl.number, tests.getUrl.selectedCategoryId, tests.getUrl.difficulty, tests.getUrl.type).then(res=>{
            setTestes(res.data.results)
            tests.setQuestionsLength(res.data.results.length)
            if(res.data.response_code === 1)setNoResponse(true)
            else if(res.data.results.length === 0)setNoResponse(true)
        })
    },[])

    function finishTest() {
        tests.setFinalPoints(correctAnswersCount)
    }
    if(noResponse)return <div className = "wrapper">
        <div className = "error-container">
            <div className = "error-title">
                Test not found 
            </div>
            <NavLink to="/select">
                <button className = "finish-test">Retry</button>
            </NavLink>
        </div>
    </div>

    return(
        <div className = "wrapper">
        <div className = "container">
            {testes.map((element, index) => {
                return <Test
                add = {add}
                subtraction = {subtraction}
                id = {index}
                key = {index}
                test = {element}
            />
            })}
            <NavLink to = '/final'>
            <button className = "finish-test" onClick = {finishTest} > Finish Test </button>
            </NavLink>
        </div>
        </div>
    )  
})