import axios from "axios"
export const FETCH_IMAGE_START ="FETCH_IMAGE_START"
export const FETCH_IMAGE_SUCCESS = "FETCH_IMAGE_SUCCESS"
export const FETCH_IMAGE_ERROR = "FETCH_IMAGE_ERROR"


export function FetchImage(){
    return (dispatch)=>{
        dispatch({type : FETCH_IMAGE_START})
        axios.get("https://api.unsplash.com/photos/?client_id=171226e624537cb3614844f8b9e9c30c96a4788ee2dae3f9479d172c703fe738")
        .then(res=>{
            console.log(res.data)
            dispatch({type : FETCH_IMAGE_SUCCESS,payload :res.data})
        })
        .catch (err =>{
            dispatch({type : FETCH_IMAGE_ERROR ,payload :err})
        })
    }
}