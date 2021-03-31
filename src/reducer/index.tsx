import React, {createContext, useReducer} from 'react';

const initialState = {
  profession: null,
  qualification: null,
  tools: null,
};

type State = typeof initialState;


type Action = {
  type: string;
  payload?: any
}

function reducer(state: State, action: Action) {
  switch (action.type) {
    case '1':
      return {
        ...state
      };
    default:
      return {
        ...state
      }
  }
};

const GlobalContext = createContext<any>(initialState);

const GlobalProvider: React.FC = ({children}) => {

  const [state, dispatch] = useReducer<any>(reducer, initialState);

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
