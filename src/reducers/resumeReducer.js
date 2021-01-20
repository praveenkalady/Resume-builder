import { ADD_RESUME,GET_RESUME,GET_ONE_RESUME,DELETE_RESUME } from '../actions/types';

const initialState = {
    resume:[],
    single:null
}

export default function resumeReducer(state=initialState,action) {
    switch(action.type){
        case ADD_RESUME:
            return {
                ...state,
                resume:[...state.resume,action.payload]
            }
        case GET_RESUME:
            return {
                ...state,
                resume:action.payload
            }
        case GET_ONE_RESUME:
            return {
                ...state,
                single:state.resume.find((item) => item.id === action.payload)
            }
        case DELETE_RESUME:
            return {
                ...state,
                resume:state.resume.filter(item => item.id !== action.payload)
            }
        default:
            return state;
    }
}