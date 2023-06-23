import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

function Item({item}){
    // console.log(item);
    const user = useSelector((store) => store.user)

    const dispatch = useDispatch();

    const deleteItem = () =>{
        dispatch({
            type: 'DELETE_ITEMS',
            payload: item.id
        })
    }
    return(
        <>
        {
            user.id === item.user_id ?

        (<div>
        <img src={item.image_url}/>
        <p>{item.description}</p>
        <button onClick={deleteItem}>🗑️</button>
        </div>)
        :     
       (<div>
        <img src={item.image_url}/>
        <p>{item.description}</p>
        </div>)     
        }
        </>
    )
}

export default Item;