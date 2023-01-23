import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { useNavigate } from 'react-router-dom';

function Nav({ setChangeText, changeText }) {
    const time = useRef(null)
    const restart = useRef(null)
   
    function handlechange() {
      restart.current= parseInt(prompt("what is your timer?"))
        setChangeText(restart.current)
    }

    function handleReset() {
        setChangeText(0)
    }

    function handlestart() {
        clearInterval(time.current)

        time.current = setInterval(() => {
            setChangeText((prev) => {
                if (prev === 0) {
                    clearInterval(time.current);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
    }
    function handlepause(){
        clearInterval(time.current);
    }

    function handlerestart(){
        setChangeText(restart.current)
        // handlestart()
        clearInterval(time.current);

    }

    function handleshare(){
        navigator.clipboard.writeText(`http://localhost:3000/timer/${restart.current}`)
    }

    return (
        <div className="nav">
            <Button  onClick={handlechange} >change</Button>
            <Button  onClick={handleReset} >reset</Button>
            <Button  onClick={handlepause} >pause</Button>
            <Button  onClick={handlestart} >start</Button>
            <Button  onClick={handleshare} >share</Button>
            <Button  onClick={handlerestart} >restart</Button>
        </div>
    );
}

export default Nav;