import React from "react";
import { useRef, useState } from 'react';
import { Row, Col } from 'react-bootstrap';

const StdnumManger = () => {
    const [stdNum, setStdNum] = useState();
    const phone = useRef();
    const major = useRef();
    const numberMaxLength = (e) => {
        if (e.target.value.length > e.target.maxLength) {
            e.target.value = e.target.value.slice(0, e.target.maxLength);
        }
    }
    const onchange = () => {
        setStdNum(phone.current.value);
    }
    const onblur = () => {
        if (stdNum.length == 10) {
            if (stdNum.slice(4, 7) == 136) {
                major.current.value = '컴퓨터공학부';
            }
            else if (stdNum.slice(4, 7) == 111) {
                major.current.value = '기계공학부';
            }
            else if (stdNum.slice(4, 7) == 112) {
                major.current.value = '전기전자공학부';
            }
            else if (stdNum.slice(4, 7) == 113) {
                major.current.value = '메카트로닉스공학부';
            }
            else if (stdNum.slice(4, 7) == 114) {
                major.current.value = '에너지신소재공학부';
            }
            else if (stdNum.slice(4, 7) == 115) {
                major.current.value = '건축공학부';
            }
            else if (stdNum.slice(4, 7) == 116) {
                major.current.value = '고용서비스정책학부';
            }
            else {
                major.current.value = '존재하지 않는 학부입니다';
            }

        };
    }
    return (
        <>
            <Row className="justify-content-center">
                <Col md='auto' xs='auto'>
                    <input type="number" className='form-control mb-2' id="input-stdnum" placeholder="학번을 입력하세요" maxLength={10} onInput={numberMaxLength} onChange={onchange} ref={phone} onBlur={onblur} />
                </Col>
            </Row>
            <Row className="justify-content-center">
                <Col md='auto' xs='auto'>
                    <input type="text" className='form-control mb-2' id="input-major" disabled ref={major} placeholder='major'/>
                </Col>
            </Row>
        </>
    )
}
export default StdnumManger;