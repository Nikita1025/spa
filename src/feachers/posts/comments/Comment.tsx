import React, {FC} from 'react';
import Card from "react-bootstrap/Card";
import { useAppSelector} from "../../../store/store";
import style from './Comments.module.css'
type CommentType = {
    id: number
}
export const Comment: FC<CommentType> = ({id}) => {
    const {comments} = useAppSelector(state => state.post)

    return (
        <div>
            {comments.map(el =>
                <>{el.postId=== id && <div key={el.id} className={style.comments}><Card.Title>{el.email}</Card.Title>
                        <Card.Text>{el.body}</Card.Text></div>}
                </>)}
        </div>
    );
};

