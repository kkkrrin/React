import React, { useState } from 'react';
import movie from '../assets/api/movie.json';
import Modal from './Modal';
import MovieList from './MovieList';
import MovieView from './MovieView';
import './style.css';

const Movie = () => {

    const [data,setData]=useState(movie)
    const [movieInfo,setMovieInfo]=useState(data[0]) //movie ==data 같음
    const [isShow,setIsShow]=useState(false)


    const onOver=(id)=>{

       //방법1 setMovieNum(data[id-1])
        setMovieInfo(data.find(item=>item.rank===id)) //방법2 
    }

    const onOpen=()=>{
        setIsShow(true)
    }
    
    const onClose=()=>{
        setIsShow(false)
    }


    return (
       <>
        <div className='gallery'>
            <MovieView movieInfo={movieInfo} onOpen={onOpen}/>
            <MovieList data={data} onOver={onOver}/>
        </div>
        { 
        isShow && <Modal onClose={onClose} movieInfo={movieInfo}/>
        }
        </>
    );
};

export default Movie;