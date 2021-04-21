import React from 'react'
import axios from 'axios'
import {ResultType} from "./reducer";

//action types
const SET_PROFESSION = 'SET_PROFESSION';
const SET_QUALIFICATION = 'SET_QUALIFICATION';
const SET_TOOLS = 'SET_TOOLS';

const GET_QUIZES_START = 'GET_QUIZES_START';
const GET_QUIZES_SUCCESS = 'GET_QUIZES_SUCCESS';
const GET_QUIZES_FAIL = 'GET_QUIZES_FAIL';

const SET_QUIZ_RESULT = 'SET_QUIZ_RESULT';

//action creators

//
const setProfession = (payload: string | null) => ({
    type: SET_PROFESSION,
    payload
})
const setQualification = (payload: string | null) => ({
    type: SET_QUALIFICATION,
    payload
})
const setTools = (payload: string | null) => ({
    type: SET_TOOLS,
    payload
})

const setQuizResult = (payload: ResultType) => {
    return ({
        type: SET_QUIZ_RESULT,
        payload
    })
}

const getQuizesStart = () => ({type: GET_QUIZES_START});
const getQuizesSuccess = (payload: any) => ({type: GET_QUIZES_SUCCESS, payload});
const getQuizesFail = () => ({type: GET_QUIZES_FAIL});

const getQuizes = () => {
    return (dispatch: React.Dispatch<any>) => {
        dispatch(getQuizesStart());
        axios.get('./api/quizes/list.json')
            .then(resp => {
                // @ts-ignore
                return setTimeout(() => dispatch(getQuizesSuccess(resp.data)), 2000);
            })
            .catch(err => dispatch(getQuizesFail()))
    }
}



export {
    SET_PROFESSION,
    SET_QUALIFICATION,
    SET_TOOLS,
    GET_QUIZES_START,
    GET_QUIZES_SUCCESS,
    GET_QUIZES_FAIL,
    SET_QUIZ_RESULT,

    setProfession,
    setQualification,
    setTools,
    getQuizes,
    setQuizResult
}