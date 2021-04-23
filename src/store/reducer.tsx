import React, {createContext, useEffect } from 'react';
import { useThunkReducer } from './thunkReduxer';
import { toogleResults } from '../utils';
import {
  SET_QUALIFICATION,
  SET_PROFESSION,
  SET_TOOLS,
  GET_QUIZES_START,
  GET_QUIZES_SUCCESS,
  GET_QUIZES_FAIL,
  SET_QUIZ_RESULT,
  SEND_RESULTS_START,
  SEND_RESULTS_SUCCESS,
  SEND_RESULTS_FAIL
} from './action-creators'

const initialState = {
  profession: null,
  qualification: null,
  tools: null,
  quizes: [],
  loading: false,
  errors: false,
  results: [],
  resultsSendSuccess: null,
};

export type AnswerType = {
  text: string;
  id: string;
};

export type QuizeType = {
  id: string;
  question: string;
  answers: Array<AnswerType>
};

export type ResultType = {
  answer_id: string;
  question_id: string;
}

export type StateType = {
  profession: string;
  qualification: string;
  tools: string;
  quizes: Array<QuizeType>;
  results: Array<ResultType>;
  resultsSendSuccess: boolean | null;
};

const initialize = window.localStorage.getItem('store')
    ? JSON.parse(window.localStorage.getItem('store') as string)
    : initialState;

type Action = {
  type: string;
  payload?: any
};

function reducer(state: StateType, action: Action) {
  switch (action.type) {
    case SET_PROFESSION:
      return {
        ...state,
        profession: action.payload
      };
    case SET_QUALIFICATION:
      return {
        ...state,
        qualification: action.payload
      };
    case SET_TOOLS:
      return {
        ...state,
        tools: action.payload
      };
    case GET_QUIZES_START:
    case SEND_RESULTS_START:
      return {
        ...state,
        loading: true,
        errors: false
      };
    case GET_QUIZES_SUCCESS:
      return {
        ...state,
        quizes: action.payload,
        loading: false,
        errors: false
      };
    case GET_QUIZES_FAIL:
      return {
        ...state,
        errors: true
      };
    case SET_QUIZ_RESULT:
      return {
        ...state,
        results: toogleResults(state.results, action.payload)
      };
    case SEND_RESULTS_SUCCESS:
      return {
        ...state,
        resultsSendSuccess: true,
      };
    case SEND_RESULTS_FAIL:
      return {
        ...state,
        resultsSendSuccess: false,
      };
    default:
      return {
        ...state
      }
  }
};

const GlobalContext = createContext<any>(null);

const GlobalProvider: React.FC = ({children}) => {

  // @ts-ignore
  const [state, thunkDispatch] = useThunkReducer<any>(reducer, initialize);

  useEffect(() => {
    window.localStorage.setItem('store', JSON.stringify(state))
  }, [state])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch: thunkDispatch
    }}>
      { children }
    </GlobalContext.Provider>
  )
};

export {
  reducer,
  GlobalContext,
  GlobalProvider,

}
