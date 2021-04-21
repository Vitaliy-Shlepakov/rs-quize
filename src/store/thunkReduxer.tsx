//https://medium.com/yld-blog/rolling-your-own-redux-with-react-hooks-and-context-bbeea18b1253
import {useReducer} from "react";

export const useThunkReducer = (reducer : () => void, initialState: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const thunkDispatch = (action: any ) => {
        if (typeof action === "function") {
            return action(dispatch, state);
        }
        // @ts-ignore
        return dispatch(action);
    };
    return [state, thunkDispatch];
};