import React, { useState } from 'react';
import MelonForm from './MelonForm';
import MelonList from './MelonList';
import './Melon.css';
import music from '../assets/api/music';
import Modal from './Modal';

const Melon = () => {

    const [musics,setMusics]=useState(music)
    const [isShow,setIsShow]=useState(false) //팝업창
    const [musicNum,setMusicNum]=useState() //동영상


    const getDate=()=>{
        const now= new Date()
        const year=now.getFullYear()
        const month=now.getMonth()+1
        const date = now.getDate()
        const msg=`${year}.${month}.${date}` 
        return msg
    }

    const onLike=(id)=>{
        setMusics(musics.map(music=>music.id===id?{
            ...music,done:!music.done, like:!music.done? music.like+1 : music.like-1}:music
             ))
    }

    const onSearch =(text) =>{
        setMusics(musics.filter(music=>music.title.toLowerCase().indexOf(text.toLowerCase())!==-1))
    }

    //modal open
    const onOpen=(id)=>{
        setIsShow(true)
        setMusicNum(musics.find(music=>music.id===id))

    }
    //modal close
    const onClose=()=>{
        setIsShow(false)
    }

    return (
        <div className='Melon'>
            <h2>Melon {getDate()} 인기차트</h2>      
            <MelonForm onSearch={onSearch}/>
            <MelonList musics={musics} onLike={onLike} onOpen={onOpen}/>      
            { 
                isShow && <Modal musicNum={musicNum} onClose={onClose}/>
            }
        </div>
    );
};

export default Melon;