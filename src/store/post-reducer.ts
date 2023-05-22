import {Dispatch} from "redux";
import {GlobalApi} from "../api/api";

let initialState: InitialStateType = {
    posts:[],
    comments:[]
}
export type InitialStateType = {
    posts: PostType[]
    comments:CommentsType[]
}
export type PostType={
    userId: number
    id: number
    title: string
    body: string
}
export type CommentsType={
    postId: number
    id: number
    name: string
    email:string
    body: string
}
export const postReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-POSTS":{
            return {...state, posts: action.posts}
        }
        case "GET-COMMENTS":{
            return {...state, comments: action.comments}
        }
        default:
            return state
    }
}

export const getPostsAC=(posts:PostType[])=>({type:'GET-POSTS', posts} as const)
export const getCommentsAC=(comments:CommentsType[])=>({type:'GET-COMMENTS', comments} as const)

export type ActionType= ReturnType<typeof getPostsAC>
    | ReturnType<typeof getCommentsAC>


export const getPostTC =()=>(dispatch:Dispatch)=>{
  GlobalApi.getPosts()
        .then(res=>{
            dispatch(getPostsAC(res.data))
        })
}
export const getCommentsTC =(id:number)=>  (dispatch:Dispatch)=>{
  GlobalApi.getComments(id)
        .then(res=>{
            dispatch(getCommentsAC(res.data))
        })
}
