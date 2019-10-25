import {
    FETCH_IMAGE_START,
    FETCH_IMAGE_SUCCESS,
    FETCH_IMAGE_ERROR
} from "../actions/splach"


const initialState= {
    image:[],
    isLoading:false,
    error:null
}

export function reducer(state=initialState, action){
    switch(action.type){
        case FETCH_IMAGE_START :
            return {
                ...state,
                isLoading :true
            }
        case FETCH_IMAGE_SUCCESS :
            return {
                ...state,
                image : action.payload,
                isLoading:false
            }    
        case FETCH_IMAGE_ERROR :
            return {
                ...state,
                error :action.payload,
                isLoading :false

            }    
        default:
            return state;
    }
}