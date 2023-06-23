import React from 'react';
import {useDispatch} from 'react-redux';

function Item({item}){
    // console.log(item);

    const dispatch = useDispatch();

    const deleteItem = () =>{
        dispatch({
            type: 'DELETE_ITEMS',
            payload: item.id
        })
    }
    return(
        <>
        <img src={item.image_url}/>
        <p>{item.description}</p>
        <button onClick={deleteItem}>🗑️</button>
        </>
    )
}

export default Item;