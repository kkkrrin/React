import React from 'react';
import { AiOutlineCloseCircle } from 'react-icons/ai';

const Modal = ({onClose,movieInfo}) => {

    const {thumbUrl,movieNm,openDt,director,genre,dtNm}=movieInfo



    return (
        <div className='modal'>
            <div className='bg'>
                <div className='popup'>
                    <h3>{movieNm}</h3>
                    <div>
                        <img src={thumbUrl} alt={movieNm}/>
                    </div>
                    <strong>{director}</strong>
                    <p className='close' onClick={onClose}>
                        <AiOutlineCloseCircle/>
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Modal;