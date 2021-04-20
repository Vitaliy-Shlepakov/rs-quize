import React, {createContext, useEffect, useReducer} from 'react';
import {
  SET_QUALIFICATION,
  SET_PROFESSION,
  SET_TOOLS
} from './action-creators'


let initialState = window.localStorage.getItem('store')
    ? JSON.parse(window.localStorage.getItem('store') as string)
    : {
      profession: null,
      qualification: null,
      tools: null,
    };

type State = typeof initialState;


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
    default:
      return {
        ...state
      }
  }
};

const GlobalContext = createContext<any>(null);

const GlobalProvider: React.FC = ({children}) => {

  const [state, dispatch] = useReducer<any>(reducer, initialState);

  useEffect(() => {
    window.localStorage.setItem('store', JSON.stringify(state))
  }, [state])

  return (
    <GlobalContext.Provider value={{
      state,
      dispatch
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
