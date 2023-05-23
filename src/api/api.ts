import axios from 'axios';

import { CommentsType, PostType, UsersType } from '../feachers/types/types';

const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
});

export const GlobalApi = {
  getPosts() {
    return instance.get<PostType[]>('posts');
  },
  getComments(id: number) {
    return instance.get<CommentsType[]>(`posts/${id}/comments`);
  },
  getUser(id: number) {
    return instance.get<UsersType>(`users/${id}`);
  },
};
