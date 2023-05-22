import {Dispatch} from "redux";
import {GlobalApi} from "../api/api";

let initialState: InitialStateType = {
    posts:[],
    comments:[],
    users: {} as UsersType
}
export type InitialStateType = {
    posts: PostType[]
    comments:CommentsType[]
    users: UsersType
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
export type UsersType={
    id: number
    name: string
    username:string
    email:string
    address: AddressType
    phone: string
    website: string
    company:CompanyType
}
type CompanyType={
    name: string
    catchPhrase: string
    bs: string
}
type AddressType={
    street: string
    suite: string
    city: string
    zipcode: string
    geo:{
        lat: string
        lng: string
    }
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
        default:
            return state
    }
}

export const getPostsAC=(posts:PostType[])=>({type:'GET-POSTS', posts} as const)
export const getCommentsAC=(comments:CommentsType[])=>({type:'GET-COMMENTS', comments} as const)
export const getUserAC=(users:UsersType)=>({type:'GET-USERS', users} as const)

export type ActionType= ReturnType<typeof getPostsAC>
    | ReturnType<typeof getCommentsAC>
    | ReturnType<typeof getUserAC>


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
export const getUserTC =(id:number)=>  (dispatch:Dispatch)=>{
  GlobalApi.getUser(id)
        .then(res=>{
            dispatch(getUserAC(res.data))
        })
}
