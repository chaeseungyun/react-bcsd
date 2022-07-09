import React from "react";
import {useCookies, useRef, useEffect} from 'react-cookie';
import { Button } from 'react-bootstrap';

function LogIn({onclick}) {
    const [cookie, setCookie] = useCookies('id');
    
    return(
        <Button variant="dark" onClick={onclick}>LogIn</Button>
    )
}

export default LogIn;