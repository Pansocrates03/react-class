import React, {useState} from "react";

const Add = ({ add }) => {
    const [name, setName] = useState("");
    const [price,setPrice] = useState("");

    const onsubmit = (e) => {
        e.preventDefault();
        if(!name || !price) {}
        add({ name: name, price: price})
        alert(name);
    }

    return(
        <form onSubmit={onsubmit}>
            <input onChange={e=>{setName(e.target.value)}} />
            <input
                onChange={e => setPrice(e.target.value)}
                value={price}
                type="text"
                name=""
                id="" />
            <input type="submit" />
        </form>
    )
}

export default Add