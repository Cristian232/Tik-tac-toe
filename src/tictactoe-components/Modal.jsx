import {Alert} from "./Alert";
import React, { useState } from 'react';
export function Modal(props) {
    const[isModalOpen, setIsModalOpen] = useState(true);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    }

    if(isModalOpen){
    return (
        <div id={"Modal"}>
            <Alert isClicked = {toggleModal} currentP={props.currentP} />
        </div>
    )}
}