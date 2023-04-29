
import React, {useEffect, useState} from "react";


export function Alert(props) {
    const [, setUsername] = useState("");

    const {isClicked,currentP} = props;

    useEffect(() => {
        const button = document.getElementById("submitButton");
        button.addEventListener('click',buttonController,false);

        return () => {
            button.removeEventListener("click", buttonController);
        };
    })

    function buttonController() {
        const input = document.getElementById("inputAlert");
        if (input.value === ""){
            return;
        }
        setCookie(input.value,0.5)
        isClicked();
    }

    function setCookie(name,daysToLive){
        let value = 0;
        const date = new Date();
        date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
        let expires = "expires=" + date.toUTCString();
        let cookieAlreadyExists = false;
        for (let cookie of document.cookie.split(';')) {
            cookie = cookie.trim();
            if (name === cookie.substring(0,name.length)){
                cookieAlreadyExists = true;
                setUsername(name);
                if(currentP) {
                    currentP(name);
                }
                return;
            }
        }
        if (!cookieAlreadyExists){
            setUsername(name);
            props.currentP(name);
            document.cookie = `${name}=${value}; ${expires}; path=/`;
        }
    }

    return (
        <div id={"divAlert"}>
            <label>Tik tac toe</label>
            <div id={"divInput"}>
            <input type={"text"} id={"inputAlert"} name={"inputName"}
                   placeholder={"Type in you name: ex \"Banana\" "}/>
            <button type={"submit"} id={"submitButton"}> Enter </button>
            </div>
        </div>
    )
}