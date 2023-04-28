export function Alert() {
    return (
        <div id={"divAlert"}>
            <label>Tik tac toe</label>
            <div id={"divInput"}>
            <input type={"text"} id={"inputAlert"} name={"inputName"} placeholder={"Type in you name: ex \"Banana\" "}/>
            <button type={"submit"}> Enter </button>
            </div>
        </div>
    )
}