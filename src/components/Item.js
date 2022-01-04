import React from "react";

const Item=({item,carro,setCarro,items})=>{

    const {nombre,precio,cantidad,id}= item;

    const addItem= (id) =>{
        const item =items.filter((item)=> item.id === id);
        setCarro([...carro,...item]);
        console.log(carro.length);
    };
    return(
        <div>
            <ul>
                <li> nombre del producto: {nombre}</li>
                <li>cantidad {cantidad}</li>
                <li>precio: $ {precio}</li>
                <button type="button" onClick={()=>addItem(id)}>agregar a pedido</button>
            </ul>
        </div>
    );
};

export default Item;