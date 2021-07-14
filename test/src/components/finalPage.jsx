import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { TestsContext } from '..'
import './finalPage.css'

export default observer( function FinalPage() {
    const {tests} = useContext(TestsContext)
    return(
        <div className = "wrapper">
            <div>
                <div className = "result">total number of your points is :{tests.getFinalPoint}/{tests.getQuestionsLength}</div> 
                <NavLink to = "/select"><button className = "retry-test" >Retry</button></NavLink>
            </div>
        </div>
    )
})