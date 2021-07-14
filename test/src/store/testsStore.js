import {makeAutoObservable} from "mobx"


export default class TestsStore {
    constructor() {
        this._url = {}
        this._points = 0
        this._questionsLength = 0
        makeAutoObservable(this)
    }

    setUrl(number, selectedCategoryId, difficulty, type) {
        this._url = {number, selectedCategoryId, difficulty, type}
    }
    setFinalPoints(points) {
        this._points = points
    }
    setQuestionsLength(length) {
        this._questionsLength = length
    }
    

    get getUrl() {
        return this._url
    }
    get getFinalPoint() {
        return this._points
    }
    get getQuestionsLength() {
        return this._questionsLength
    }
}