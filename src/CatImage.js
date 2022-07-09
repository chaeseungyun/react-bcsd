import React from "react";
import axios from 'axios';
import { useEffect, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

function CatImage() {
    const img = useRef();
    useEffect(() => {
        axios.get('https://api.thecatapi.com/v1/images/search?size=full')
            .then((response) => {
                img.current.src = response.data[0].url;
            })
            .catch((Error) => {
                console.log(Error);
            })
    }, [])
    return (
        <Row className="justify-content-center mt-2">
            <Col md='auto' xs='auto'>
                <img id="img" alt="image" width="200px" height="200px" src="img/question.jpg" ref={img} />
            </Col>
        </Row>
    )
}
export default CatImage;