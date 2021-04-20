
//action types
const SET_PROFESSION = 'SET_PROFESSION';
const SET_QUALIFICATION = 'SET_QUALIFICATION';
const SET_TOOLS = 'SET_TOOLS';

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



export {
    SET_PROFESSION,
    SET_QUALIFICATION,
    SET_TOOLS,

    setProfession,
    setQualification,
    setTools
}