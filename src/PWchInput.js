import React from "react";
import { useState, useRef } from 'react';
import { Row, Col } from 'react-bootstrap';

const PWInput = () => {
    const [isCorrect, setIsCorrect] = useState("");
    const [pwState, setPwState] = useState();
    const pw = useRef();
    const ch = useRef();
    const [password, setPassword] = useState("");
    const [check, setCheck] = useState("");

    const pwchange = () => {
        setPassword(pw.current.value);
    }
    const pwCheckChagne = () => {
        setCheck(ch.current.value);
    }
    const onPwBlur = () => {
        if(!check)
        {
            console.log('시작');
        }
        else {
            if (password == check) {
                setPwState(true);
                setIsCorrect('비밀번호 일치');
            }
            else {
                setPwState(false);
                setIsCorrect('비밀번호 불일치');
            }
        }
    }
    const onblur = () => {
        if (password == check) {
            setPwState(true);
            setIsCorrect('비밀번호 일치');
        }
        else {
            setPwState(false);
            setIsCorrect('비밀번호 불일치');
        }
    }

    return (
        <>
            <Row className="justify-content-center">
                <Col md='auto' xs='auto'>
                    <input type="password" className='form-control mb-2' id="input-pw" placeholder="password를 입력하세요" ref={pw} onChange={pwchange} onBlur={onPwBlur}/>
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md='auto' xs='auto'>
                    <input type="password" className='form-control mb-2' id="input-pw" placeholder="password 확인" ref={ch} onChange={pwCheckChagne} onBlur={onblur} />
                    <span style={pwState ? { color: 'blue' } : { color: 'pink' }}>{isCorrect}</span>
                </Col>
            </Row>
        </>

    )
}

export default PWInput;