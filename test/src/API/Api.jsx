import axios from 'axios'
const GET_CATEGORIES = 'https://opentdb.com/api_category.php'
const GET_TESTS = 'https://opentdb.com'

const CategoriesInstance = axios.create({
    baseURL: GET_CATEGORIES
})
const testsInstance = axios.create({
    baseURL: GET_TESTS
})

const CategoriesAPI = () =>{
    return CategoriesInstance.get(`/`,)
}
const testsAPI = (number, selectedCategoryId, difficulty, type) =>{
    return testsInstance.get(`/api.php?amount=${number}${selectedCategoryId !== 'any' ? `&category=${selectedCategoryId}` : ''}${difficulty !== 'any' ? `&difficulty=${difficulty}` : ''}${type !== 'any' ? `&type=${type}` : ''}`)
}

export {
    CategoriesAPI,
    testsAPI
}