import React from 'react';
import Numeral from 'numeral';

import {
    
    AiOutlineUsergroupAdd,
    AiOutlineUsergroupDelete,
    AiOutlineUser,
} from 'react-icons/ai';

const MovieItem = ({item,onOver}) => {

    const {rank,movieNm,salesAmt,audiCnt,rankInten}=item

    return (
        <tr onMouseOver={()=>onOver(rank)}>
           <td>{rank}</td> 
           <td>{movieNm}</td> 
           <td>{Numeral(salesAmt).format('0,0')}</td> 
           <td>{Numeral(audiCnt).format('0,0')}</td> 
           <td>
               {rankInten}
               {rankInten===0 && <AiOutlineUser/>}
               {rankInten>0 && <AiOutlineUsergroupAdd color='red'/>}
               {rankInten<0 && <AiOutlineUsergroupDelete color='blue'/>}
            </td> 
        </tr>
    );
};

export default MovieItem;