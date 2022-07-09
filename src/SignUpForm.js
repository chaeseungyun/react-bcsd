import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useRef, useState } from 'react';
import CatImage from "./CatImage";
import PWInput from "./PWchInput";
import StdnumManger from "./StdnumMajor";

const SignUpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState("");
    const phone = useRef();
    const onPhoneInputChange = () => {
        setPhoneNumber(phone.current.value);
    }
    const onblur = () => {
        if (phoneNumber.length == 11) {
            phone.current.value = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 7) + '-' + phoneNumber.slice(7, 11);
        }
        else if (phoneNumber.length == 10) {
            if (phoneNumber.slice(0, 2) != "02")
                phone.current.value = phoneNumber.slice(0, 3) + '-' + phoneNumber.slice(3, 6) + '-' + phoneNumber.slice(6, 10);
            else {
                phone.current.value = phoneNumber.slice(0, 2) + '-' + phoneNumber.slice(2, 6) + '-' + phoneNumber.slice(6, 10);
            }
        }
    }
    return (
        <div id='form2'>
            <form>
                <Container id='signup-container'>
                    <Row className="justify-content-center">
                        <Col md='auto' xs='auto'>
                            <input type="text" className='form-control mb-2' id="input-id" placeholder="ID를 입력하세요" />
                        </Col>
                    </Row>
                    <PWInput />
                    <StdnumManger />
                    <Row className="justify-content-center">
                        <Col md='auto' xs='auto'>
                            <input type="text" className='form-control mb-2' id="input-phone" placeholder="전화번호를 입력하세요" maxLength={11} ref={phone} onBlur={onblur} onChange={onPhoneInputChange} />
                        </Col>
                    </Row>
                    <Row className="justify-content-center mb-2">
                        <Col md='auto' xs='auto'>
                            <Button variant="dark">Sign UP!</Button>{' '}
                        </Col>
                    </Row>
                </Container>
                <CatImage />
            </form>
        </div>
    )

}
export default SignUpForm;