import React from 'react'
import axios from 'axios'
import {ResultType, StateType} from "./reducer";

//action types
const SET_PROFESSION = 'SET_PROFESSION';
const SET_QUALIFICATION = 'SET_QUALIFICATION';
const SET_TOOLS = 'SET_TOOLS';

const GET_QUIZES_START = 'GET_QUIZES_START';
const GET_QUIZES_SUCCESS = 'GET_QUIZES_SUCCESS';
const GET_QUIZES_FAIL = 'GET_QUIZES_FAIL';

const SET_QUIZ_RESULT = 'SET_QUIZ_RESULT';

const SEND_RESULTS_START = 'SEND_RESULTS_START';
const SEND_RESULTS_SUCCESS = 'SEND_RESULTS_SUCCESS';
const SEND_RESULTS_FAIL = 'SEND_RESULTS_FAIL';

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
};

const sendResultsStart = () => ({type: SEND_RESULTS_START});
const sendResultsSuccess = () => ({type: SEND_RESULTS_SUCCESS});
const sendResultsFail = () => ({type: SEND_RESULTS_FAIL});

const sendResults = () => {
    return (dispatch: React.Dispatch<any>, getState: StateType) => {
        sendResultsStart()
        axios.post('/test', {
            results: getState.results
        })
            .then(() => sendResultsSuccess())
            .catch(() => sendResultsFail())
    }
}

const getQuizesStart = () => ({type: GET_QUIZES_START});
const getQuizesSuccess = (payload: any) => ({type: GET_QUIZES_SUCCESS, payload});
const getQuizesFail = () => ({type: GET_QUIZES_FAIL});

const getQuizes = () => {
    return (dispatch: React.Dispatch<any>, getState: StateType) => {
        dispatch(getQuizesStart());
        const profession = getState.profession;
        const qualification = getState.qualification;
        const tools = getState?.tools;

        axios.get('./api/quizes/list.json', {
            params: {
                profession,
                qualification,
                tools
            }
        })
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
    SEND_RESULTS_START,
    SEND_RESULTS_SUCCESS,
    SEND_RESULTS_FAIL,

    setProfession,
    setQualification,
    setTools,
    getQuizes,
    setQuizResult,
    sendResults
}