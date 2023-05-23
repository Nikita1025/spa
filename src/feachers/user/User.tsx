import React, { ReactElement, useEffect } from 'react';

import { Image } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link, useNavigate, useParams } from 'react-router-dom';

import avatar from '../../assets/images/avatar.jpeg';
import { changeStatusAC, getPostTC, getUserTC } from '../../store/reducer/post-reducer';
import { useAppDispatch, useAppSelector } from '../../store/store';

import style from './User.module.css';

export const User = (): ReactElement => {
  const { users, posts } = useAppSelector(state => state.post);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  let { userId } = useParams();

  useEffect(() => {
    dispatch(changeStatusAC('loading'));
    setTimeout(() => {
      dispatch(getUserTC(+userId!));
      dispatch(getPostTC());
    }, 500);
  }, [dispatch, userId]);
  const onClickBack = (): void => {
    navigate('/');
  };

  return (
    <div>
      <Card className={style.container}>
        {users && (
          <>
            <Card.Header>{users.name}</Card.Header>
            <ListGroup variant="flush">
              <ListGroup.Item>{users.email}</ListGroup.Item>
              <ListGroup.Item>{users.phone}</ListGroup.Item>
              <ListGroup.Item>{users.website}</ListGroup.Item>
            </ListGroup>
          </>
        )}
        <Button className={style.button} onClick={onClickBack}>
          Back
        </Button>
      </Card>
      {posts?.map(el => (
        <>
          {el.userId === +userId! && (
            <Card key={el.id} className={style.container}>
              <Card.Header>
                <Link to={`/user/${el.userId}`}>
                  <Image src={avatar} className={style.avatar} />
                </Link>
              </Card.Header>
              <Card.Body>
                <Card.Title>{el.title}</Card.Title>
                <Card.Text>{el.body}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </>
      ))}
    </div>
  );
};
