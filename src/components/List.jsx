import React from 'react'
import Item from './Item'

const List = ({ items, ondelete }) => {

  return (
    <>
    {
      items.map((i) => {
        <Item items={i} key={i.id} ondelete={ondelete} />
      })
    }
    </>
  )
}

export default List
