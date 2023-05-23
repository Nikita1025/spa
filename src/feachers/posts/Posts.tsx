import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './Posts.module.css'
import avatar from '../../assets/images/avatar.jpeg'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {changeStatusAC, getCommentsTC, getPostTC} from "../../store/reducer/post-reducer";
import {Image} from "react-bootstrap";
import {Comment} from "./comments/Comment";
import {Link} from "react-router-dom";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const {posts} = useAppSelector(state => state.post)

    useEffect(() => {
        dispatch(changeStatusAC('loading'))
        setTimeout(() => {
            dispatch(getPostTC())
        }, 500)
    }, [])
    const [link, setLink] = useState<boolean>(false)
    const onClickLink = (id: number) => {
        setLink(!link)
        if (!link) {
            dispatch(changeStatusAC('loading'))
            setTimeout(() => {
                dispatch(getCommentsTC(id))
            }, 500)
        }
    }


    return (
        <div className={style.container}>
            {posts?.map(el =>
                    <Card key={el.id} className={style.container}>
                        <Card.Header>
                            <Link to={`/user/${el.userId}`}>
                                <Image src={avatar} className={style.avatar}/>
                            </Link>

                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>{el.body}</Card.Text>
                            <Button onClick={() => onClickLink(el.id)} variant="primary">Comments</Button>
                            {link && <>
                                <Comment id={el.id}/>
                            </>}
                        </Card.Body>
                    </Card>
            )}
        </div>

    );
};

