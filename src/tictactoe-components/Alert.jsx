
import {useEffect} from "react";


export function Alert() {

    useEffect(() => {
        const button = document.getElementById("submitButton");
        button.addEventListener('click',buttonController);

        return () => {
            button.removeEventListener("click", buttonController);
        };
    },[])

    function buttonController() {
        const input = document.getElementById("inputAlert");
        console.log(input.value);
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