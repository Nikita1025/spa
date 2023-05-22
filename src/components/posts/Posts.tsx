import React, {useEffect, useState} from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import style from './Posts.module.css'
import avatar from '../../images/avatar.jpeg'
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getCommentsTC, getPostTC} from "../../store/post-reducer";
import {Image} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import {render} from "@testing-library/react";
import {Comment} from "./Comment";
import {Link, Navigate, useNavigate, useParams} from "react-router-dom";
import {User} from "../user/User";

export const Posts = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const {posts} = useAppSelector(state => state.post)
    useEffect(() => {
        setTimeout(() => {
            dispatch(getPostTC())

        }, 500)
    }, [])
    const [link, setLink] = useState<boolean>(false)
    const onClickLink = (id: number) => {
        setLink(!link)
        if (!link) {
            setTimeout(() => {
                dispatch(getCommentsTC(id))
            }, 500)
        }
    }


    return (
        <div className={style.container}>
            {posts?.map(el =>
                    <Card className={style.container}>
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

