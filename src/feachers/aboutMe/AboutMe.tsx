import React from 'react';
import Card from 'react-bootstrap/Card';
import avatar from '../../assets/images/image.png'
import style from './AboutMe.module.css'

export const AboutMe = () => {
    return (
        <div className={style.container}>
            <Card className={style.card}>
                <Card.Img className={style.image} variant="top" src={avatar}/>
                <Card.Body>
                    <Card.Title>Nikita</Card.Title>
                    <Card.Text>
                        I'm a result oriented front-end developer with experience in creating SPA, using React(JS/TS),
                        Redux, HTML & CSS. Now I am improving my skills in this direction and expanding them with new
                        technologies. Ready to consider project work and full-time employment.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
};

