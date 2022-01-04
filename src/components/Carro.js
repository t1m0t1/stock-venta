import React, {Fragment} from "react";
import Item from "./Item";
import "../Css/carrito.css";

const Carro= ({carro,setCarro})=>{
    return(
        <Fragment>

            <div className="carro">
            <h3>Carrito</h3>

            {carro.length === 0 ? (
          <p>No hay nada por aquí...</p>
        ) : (
          carro.map((item) => (
            <Item
              key={item.id}
              burger={item}
              cart={carro}
              setCart={setCarro}
            />
          ))
        )}
        </div>
        </Fragment>
    );
};

export default Carro;