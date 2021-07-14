import { useContext, useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { TestsContext } from '..'
import { CategoriesAPI } from '../API/Api'
import './SelectTestParams.css'
import { observer } from 'mobx-react-lite'

export default observer( function SelectTestParams() {
  const {tests} =  useContext(TestsContext)
  const [number, setNumber] = useState(10)
  const [categories,setCategories] = useState([])
  const [selectedCategoryId, setSelectedCategoryId] = useState('any')
  const [difficulty, setDifficulty] = useState('any')
  const [type, setType] = useState('any')

  useEffect(()=>{
    CategoriesAPI().then(res =>setCategories(res.data.trivia_categories))
  },[])
  function generateUrl() {
    tests.setUrl(number, selectedCategoryId, difficulty, type)
  }
  
  return (
    <div className="wrapper">
        <div className="container">
            <h1 className="form-title">Select test options</h1>
            <h3 className="selector-title">Number of Questions:</h3>
            <input 
              onChange = {(e)=>setNumber(e.target.value)} 
              className="num-questions" 
              type="number" 
              value={ number } 
              min='1' 
              max='50'
            />
            <h3 className="selector-title">Select Category:</h3>
            <select onClick = {(e)=>setSelectedCategoryId(e.target.value)} className="categories">
                <option value="any"> Any category </option>
                {categories.map(category=>{
                  return <option value = {category.id} key = {category.id} > {category.name} </option>
                })}
            </select>
            <h3 className="selector-title">Select Difficulty:</h3>
            <select onClick = {e=>setDifficulty(e.target.value)} className="categories">
                <option value="any">Any Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <h3 className="selector-title">Select Type:</h3>
            <select onClick = {(e)=>setType(e.target.value)} className="categories">
                <option value="any">Any Type</option>
                <option value="multiple">Multiple Choice</option>
                <option value="boolean">True/False</option>
            </select>
            <NavLink to = 'tests'>
              <button onClick = {generateUrl} type="submit" className="start-test">
                start test
              </button>
            </NavLink>
        </div>
    </div>
  )
})