import React, {Fragment, useState} from 'react';
import Item from './components/Item';
import Carro from './components/Carro'


function App() {
  
  const [items,setItems]= useState([
    {id:1,nombre:"harina",cantidad:15,precio:150,},
    {id:2,nombre:"coca 3Lts",cantidad:15,precio:280,},
    {id:3,nombre:"coca 1.5Lts",cantidad:15,precio:180,},
    {id:4,nombre:"biscocho 500g",cantidad:15,precio:65,},
    {id:5,nombre:"pepas 500g",cantidad:15,precio:75.50,},
    {id:6,nombre:"foco 50w",cantidad:15,precio:200,},
    {id:7,nombre:"aceite vicentin 500",cantidad:15,precio:600,},
    {id:8,nombre:"jabon tocador",cantidad:15,precio:30,},
    {id:9,nombre:"jabon en polvo",cantidad:15,precio:260,},
    {id:10,nombre:"levadura 50g",cantidad:15,precio:50,},
  ])
  
  const [carro,setCarro]=useState([])

  return (
    <Fragment>
      <h3>Items</h3>
      {items.map((item)=>(
        <Item
        key={item.id}
        item={item}
        carro={carro}
        setCarro={setCarro}
        items={items}
        />
           ))}
       <div>
       <Carro
        carro={carro} setCarro={setCarro}

        />
         </div>


                  
    </Fragment>
  );
}

export default App;
