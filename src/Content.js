import React from "react";
import { Button, Container, Row, Col } from 'react-bootstrap';
import CatImage from "./CatImage";
import { useEffect, useRef } from 'react';
import {Link} from 'react-router-dom'


function Content() {
  const inputId = useRef();
  const inputPw = useRef();

  useEffect(() => {
      inputId.current.focus();
  }, [])

  const LoginCount = `LoginCount`; // localStorage에 저장할 key값, 로그인 실패 횟수를 카운트
  let currectId = 'a12345';
  let currectPw = 'a12345';
  const time = 60*60*72;

  function setCookie(name) // 쿠키를 저장하는 함수
  {
    document.cookie = `${name}_ID=${name};max-age=${time}`; // expire 대신 max-age를 사용했다.
  }
  function deleteCookie(name) // 쿠키를 삭제하는 함수
  {
    document.cookie = `${name};max-age=-1`; // max-age를 음수로 준다.
  }
  function saveData() // 모든 스토리지, 쿠키에 데이터 저장
  {
    setCookie(inputId.current.value);
    localStorage.setItem(`${inputId.current.value}_ID`, inputId.value);
    localStorage.setItem(`LoginState`, 0);
    sessionStorage.setItem(`${inputId.current.value}_ID`, inputId.value);
  }
  function cleanData() // 모든 스토리지, 쿠키 삭제
  {
    if (parseInt(localStorage.getItem('LoginState')) == 1) // 로그인 상태일 때 동작
    {
      localStorage.clear();
      sessionStorage.clear();
      for (let i = document.cookie.split('; ').length - 1; i >= 0; i--) {
        deleteCookie(document.cookie.split('; ')[i]);
      }
      localStorage.setItem('LoginState', 0);
      alert("로그아웃 되었습니다.");
    }
  }
  function failToLogIn() // 로그인 실패 카운트 및 오류 출력, 플래그 생성
  {
    saveData();
    if (!inputId.current.value || !inputPw.current.value) {
      if (localStorage.getItem(LoginCount) == null) {
        localStorage.setItem(LoginCount, 1);
        alert(`로그인 오류(${localStorage.getItem(LoginCount)}) 아이디 혹은 비밀번호를 입력하세요.`);
      }
      else if (parseInt(localStorage.getItem(LoginCount)) < 4) {
        localStorage.setItem(LoginCount, parseInt(localStorage.getItem(LoginCount)) + 1);
        alert(`로그인 오류(${localStorage.getItem(LoginCount)}) 아이디 혹은 비밀번호를 입력하세요.`);
      }
      else if (parseInt(localStorage.getItem(LoginCount)) >= 4) {
        localStorage.setItem(LoginCount, parseInt(localStorage.getItem(LoginCount)) + 1);
        alert("잘못된 로그인 정보를 5회 입력하여 로그인이 제한됩니다. 한 시간 후 시도해주세요.");
        document.cookie = `blockflag=LogInError; max-age=3600`;
      }
    }
    else if (inputId.current.value != currectId && inputPw.current.value != currectPw) {
      if (localStorage.getItem(LoginCount) == null) {
        localStorage.setItem(LoginCount, 1);
        alert(`로그인 오류(${localStorage.getItem(LoginCount)}) 아이디 혹은 비밀번호를 확인하세요.`);
      }
      else if (parseInt(localStorage.getItem(LoginCount)) < 4) {
        localStorage.setItem(LoginCount, parseInt(localStorage.getItem(LoginCount)) + 1);
        alert(`로그인 오류(${localStorage.getItem(LoginCount)}) 아이디 혹은 비밀번호를 확인하세요.`);
      }
      else if (parseInt(localStorage.getItem(LoginCount)) >= 4) {
        localStorage.setItem(LoginCount, parseInt(localStorage.getItem(LoginCount)) + 1);
        alert("잘못된 로그인 정보를 5회 입력하여 로그인이 제한됩니다. 한 시간 후 시도해주세요.");
        document.cookie = `blockflag=LogInError; max-age=3600`;
      }
    }
  } 
  function blockSignIn() {
    for (let i = 0; i < document.cookie.split("; ").length; i++) // 플래그 탐색
    {
      let checkflag = document.cookie.split("; ")[i];
      if (checkflag == `blockflag=LogInError`) // 로그인 플래그가 존재하면 경고창을 띄우고 폼 초기화
      {
        alert("잠시 후 다시 시도하세요.");
        inputId.current.value = "";
        inputPw.current.value = "";
      }
    }
  }
  function LogIn()
  {
    failToLogIn();
    if (inputId.current.value == currectId && inputPw.current.value == currectPw) {
      saveData();
      alert("로그인에 성공했습니다.");
      inputId.current.value = "";
      inputPw.current.value = "";
      localStorage.setItem('LoginState', 1);
      localStorage.setItem('LoginCount', 0)
    }
  }
  
  return (
      <div id="grid-form">
          <form className="pos">
              <Container id='container'>
                  <Row className="justify-content-center">
                      <Col md='auto' xs='auto'>
                          <input type="text" className='form-control mb-2' id="input-id" placeholder="ID" ref={inputId} onKeyUp={blockSignIn} />
                      </Col>
                  </Row>
                  <Row className="justify-content-center">
                      <Col md='auto' xs='auto'>
                          <input type="password" className='form-control mb-2' id="input-pw" placeholder="password" ref={inputPw} onKeyUp={blockSignIn}/>
                      </Col>
                  </Row>
                  <Row className="justify-content-center mb-2">
                      <Col md='auto' xs='auto'>
                          <Button variant="dark" onClick={LogIn}>LogIn</Button>{' '}
                      </Col>
                      <Col md='auto' xs='auto'>
                          <Button variant="dark" onClick={cleanData}>LogOut</Button>{' '}
                      </Col>
                  </Row>
                  <Row className="justify-content-center">
                      <Col md='auto' xs='auto'>
                          <Link to="/react-bcsd/SignUpPage">계정이 없으신가요?</Link>
                      </Col>
                  </Row>
              </Container>
              <CatImage />
          </form>
      </div>
  )
}

export default Content;