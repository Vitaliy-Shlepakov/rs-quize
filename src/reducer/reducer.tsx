import React, {createContext, useEffect, useReducer} from 'react';
import { useThunkReducer } from './thunkReduxer';
import {
  SET_QUALIFICATION,
  SET_PROFESSION,
  SET_TOOLS,
  GET_QUIZES_START,
  GET_QUIZES_SUCCESS,
  GET_QUIZES_FAIL,
} from './action-creators'

const initialState = {
  profession: null,
  qualification: null,
  tools: null,
  quizes: [],
  loading: false,
  errors: false
};

type Quize = {
  id: string;
  question: string;
  answers: [
      text: string,
      id: string
  ];
}
type State = {
  profession: string;
  qualification: string;
  tools: string;
  quizes: Array<Quize>
};

const initialize = window.localStorage.getItem('store')
    ? JSON.parse(window.localStorage.getItem('store') as string)
    : initialState;

type Action = {
  type: string;
  payload?: any
};

function reducer(state: State, action: Action) {
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
  GlobalProvider
}
