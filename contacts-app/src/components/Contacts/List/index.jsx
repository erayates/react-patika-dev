import React, { useState } from 'react'
import { ListItemButton, ListItemText, TextField } from '@mui/material'



function List({contacts}) {
  const [filterText,setFilterText] = useState('')

  const handleChange = (e) => {
    setFilterText(e.target.value)
  }

  const filtered = contacts.filter((item) => {
    return Object.keys(item).some((key) => {
      return item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    })
  })
  return (
    <div className='w-full'>
      <TextField name="fullname" id="outlined-basic" label="Search" variant="outlined" onChange={handleChange} className='w-full'/>


      {filtered.map((contact, index) => {
      return (
        <ListItemButton component="a" href="#simple-list" key={index}>
          <ListItemText primary={contact.fullname} secondary={contact.phone}/>
        </ListItemButton>
      )}
    )}
    </div>
  )
}

export default List