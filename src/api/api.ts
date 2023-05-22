import axios from "axios";
import {CommentsType, PostType} from "../store/post-reducer";

const instance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/'
})

export const GlobalApi={
    getPosts(){
        return instance.get<PostType[]>('posts')
    },
    getComments(id:number){
        return instance.get<CommentsType[]>(`posts/${id}/comments`)
    }
}

