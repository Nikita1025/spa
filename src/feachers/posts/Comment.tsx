import React, {FC, useEffect} from 'react';
import Card from "react-bootstrap/Card";
import {useAppDispatch, useAppSelector} from "../../store/store";
import style from './Comments.module.css'
type CommentType = {
    id: number
}
export const Comment: FC<CommentType> = ({id}) => {
    const dispatch = useAppDispatch()
    const {comments} = useAppSelector(state => state.post)
    // useEffect(() => {
    //     dispatch(getCommentsTC(id))
    // }, [])
    return (
        <div>
            {comments.map(el =>
                <>{el.postId=== id && <div className={style.comments}><Card.Title>{el.email}</Card.Title>
                        <Card.Text>{el.body}</Card.Text></div>}
                </>)}
        </div>
    );
};

