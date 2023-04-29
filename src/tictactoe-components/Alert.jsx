
import React,{useEffect} from "react";


export function Alert(props) {

    const {isClicked} = props;

    useEffect(() => {
        const button = document.getElementById("submitButton");
        button.addEventListener('click',buttonController,false);

        return () => {
            button.removeEventListener("click", buttonController);
        };
    },[isClicked])

    function buttonController() {
        const input = document.getElementById("inputAlert");
        if (input.value === ""){
            return;
        }
        console.log(input.value);
        isClicked();
    }

    return (
        <div id={"divAlert"}>
            <label>Tik tac toe</label>
            <div id={"divInput"}>
            <input type={"text"} id={"inputAlert"} name={"inputName"} placeholder={"Type in you name: ex \"Banana\" "}/>
            <button type={"submit"} id={"submitButton"}> Enter </button>
            </div>
        </div>
    )
}