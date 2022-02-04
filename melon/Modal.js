import React from 'react';
import './Modal.css';
import { AiOutlineClose } from 'react-icons/ai';
import music from '../assets/api/music';

const Modal = ({musicNum,onClose}) => {

    const {title,singer,key}=musicNum

    return (
        <div className='Modal'>
            <div className='bg'></div>
            <div className='popup'>
                TITLE: {title}
                <div>
        <iframe src={`https://www.youtube.com/embed/${key}` }
        frameborder="0"></iframe>
                </div>
                <p>singer: {singer} </p>
                <span><i onClick={onClose}><AiOutlineClose/></i></span>
            </div>
        </div>
    );
};

export default Modal;