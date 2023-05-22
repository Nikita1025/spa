import React, {FC, useEffect} from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {useAppDispatch, useAppSelector} from "../../store/store";
import {getPostTC, getUserTC} from "../../store/post-reducer";
import {Link, useParams} from "react-router-dom";
import style from "./User.module.css";
import {Image} from "react-bootstrap";
import avatar from "../../images/avatar.jpeg";
import Button from "react-bootstrap/Button";
import {Comment} from "../posts/Comment";

export const User = () => {
    const {users, posts} = useAppSelector(state => state.post)
    const dispatch = useAppDispatch()
    let {userId} = useParams()
    useEffect(() => {
        setTimeout(() => {
            dispatch(getUserTC(+userId!))
            dispatch(getPostTC())
        }, 500)
    }, [userId])
    return (
        <div>
            <Card className={style.container}>
                {users && <>
                    <Card.Header>{users.name}</Card.Header>
                    <ListGroup variant="flush">
                        <ListGroup.Item>{users.email}</ListGroup.Item>
                        <ListGroup.Item>{users.phone}</ListGroup.Item>
                        <ListGroup.Item>{users.website}</ListGroup.Item>
                    </ListGroup>
                </>}
            </Card>
            {posts?.map(el =>
                <>
                    {el.userId === +userId! &&
                        <Card className={style.container}>
                            <Card.Header>
                                <Link to={`/user/${el.userId}`}>
                                    <Image src={avatar} className={style.avatar}/>
                                </Link>

                            </Card.Header>
                            <Card.Body>
                                <Card.Title>{el.title}</Card.Title>
                                <Card.Text>{el.body}</Card.Text>
                            </Card.Body>
                        </Card>}
                </>
            )}
        </div>
    )

}
