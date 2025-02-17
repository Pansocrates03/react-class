import React from "react";

const Boton = (props) => {

    return <button onClick={props.click}>{props.name}</button>
}

export default Boton