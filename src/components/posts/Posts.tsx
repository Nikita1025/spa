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

export const Posts = () => {
    const dispatch = useAppDispatch()
    const {posts, comments} = useAppSelector(state => state.post)
    useEffect(() => {
        setTimeout(()=>{
            dispatch(getPostTC())

        },500)
    }, [])
    const [link, setLink] = useState<boolean>(false)
    const onClickLink = ( id: number) => {
        setLink(!link)
        if (!link) {
            setTimeout(()=>{
                dispatch(getCommentsTC(id))
            },500)
        }
    }
    console.log(link)
    return (
        <div className={style.container}>
            {posts?.map(el =>
                    <Card className={style.container}>
                        <Card.Header>
                            <Image src={avatar} className={style.avatar}/>

                        </Card.Header>
                        <Card.Body>
                            <Card.Title>{el.title}</Card.Title>
                            <Card.Text>{el.body}</Card.Text>
                            <Button onClick={() => onClickLink (el.id)} variant="primary">Comments</Button>
                            {link && <>
                                <Comment id={el.id}/>
                            </>}
                        </Card.Body>
                    </Card>

                // <Card>
                //     <Card.Header>
                //         <Nav variant="tabs" defaultActiveKey="#first">
                //             <Image src={avatar} className={style.avatar}/>
                //                 <Button active={true} variant='light'onClick={() => onClickLink('Post', el.id)}>Post</Button>
                //                 <Button variant='light' onClick={() => onClickLink('Comments', el.id)}>Comments</Button>
                //         </Nav>
                //     </Card.Header>
                //     <Card.Body>
                //         {link === 'Post'
                //             ? <>
                //                 <Card.Title>{el.title}</Card.Title>
                //                 <Card.Text>{el.body}</Card.Text>
                //             </>
                //             : <Comment id={el.id}/>
                //         }
                //
                //     </Card.Body>
                // </Card>
            )}
        </div>

    );
};

