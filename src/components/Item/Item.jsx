import React from 'react';

function Item({item}){
    console.log(item);
    return(
        <>
        <img src={item.image_url}/>
        <p>{item.description}</p>
        </>
    )
}

export default Item;