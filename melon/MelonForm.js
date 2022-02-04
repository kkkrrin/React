import React, { useEffect, useReducer, useState } from 'react';
import './MelonForm.css';

const MelonForm = ({onSearch}) => {

    const [text,setText]=useState()

    const changeInput=(evt)=>{
        const {value}=evt.target
        setText(value)
       // onSearch(value)
    }


    const onSubmit=(evt)=>{
        evt.preventDefault()
        onSearch(text)
        setText('')

    }

    return (
        <form className='MelonForm' onSubmit={onSubmit}>
            <input type='text' placeholder='곡명을 입력하세요' value={text} onChange={changeInput}/>
        </form>
    );
};

export default MelonForm;