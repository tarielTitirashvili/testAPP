import React from 'react'
import './SelectTestParams.css'

export default function TestAnswers({ checked, index, event, id }) {

    return(
        <div>
            <input onChange = {e=>checked(e.target.value)} key = {index} id = {event} type="radio" name = {id} value = {event}/>
            <label htmlFor = {event} >{event}</label>
        </div>
    )
}