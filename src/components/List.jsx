import React from 'react'
import Item from './Item'

const List = (props) => {
    if(props.items.length === 0) {
        return <p>No hay elementos</p>
    }
  return (
    <ol>
        {props.items.map((item, index) => (
            <Item key={index} item={item} index={index} />
        ))}
    </ol>
  )
}

export default List
