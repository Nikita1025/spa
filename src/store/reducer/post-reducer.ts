import {Dispatch} from "redux";
import {GlobalApi} from "../../api/api";
import {ActionType, CommentsType, PostType, StatusType, UsersType} from "../../feachers/types/types";

let initialState: InitialStateType = {
    posts:[],
    comments:[],
    users: {} as UsersType,
    status: "idle"
}
export type InitialStateType = {
    posts: PostType[]
    comments:CommentsType[]
    users: UsersType
    status: StatusType
}

export const postReducer = (state = initialState, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "GET-POSTS":{
            return {...state, posts: action.posts}
        }
        case "GET-COMMENTS":{
            return {...state, comments: action.comments}
        }
        case "GET-USERS":{
            return {...state, users: action.users}
        }
        case "CHANGE-STATUS":{
            return {...state, status: action.status}
        }
        default:
            return state
    }
}

export const getPostsAC=(posts:PostType[])=>({type:'GET-POSTS', posts} as const)
export const getCommentsAC=(comments:CommentsType[])=>({type:'GET-COMMENTS', comments} as const)
export const getUserAC=(users:UsersType)=>({type:'GET-USERS', users} as const)
export const changeStatusAC=(status:StatusType)=>({type:'CHANGE-STATUS', status} as const)

export const getPostTC =()=> (dispatch:Dispatch)=>{
  GlobalApi.getPosts()
        .then(res=>{
            dispatch(getPostsAC(res.data))
            dispatch(changeStatusAC('success'))
        })
}
export const getCommentsTC =(id:number)=>  (dispatch:Dispatch)=>{
  GlobalApi.getComments(id)
        .then(res=>{
            dispatch(getCommentsAC(res.data))
            dispatch(changeStatusAC('success'))
        })
}
export const getUserTC =(id:number)=>  (dispatch:Dispatch)=>{
  GlobalApi.getUser(id)
        .then(res=>{
            dispatch(getUserAC(res.data))
            dispatch(changeStatusAC('success'))

        })
}
