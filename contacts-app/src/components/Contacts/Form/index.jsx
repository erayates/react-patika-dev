import {useState} from 'react'

import { Button, TextField } from '@mui/material'

function Form({setContacts}) {

    const [form, setForm] = useState({
        fullname: '',
        phone: ''
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === '' || form.phone === ''){
            return false
        }

        setContacts((prev) => {
            return [...prev, form]
        })
        
        setForm({
            fullname: '',
            phone: ''
        })
    
    }



    const handleChange = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }
  return (
    <div className='w-full'>
          <hr className="my-4"></hr>
        <h3 className='text-xl font-md'>Add A New Contact</h3>
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <TextField name="fullname" id="outlined-basic" label="Fullname" variant="outlined" onChange={handleChange} value={form.fullname}/>
            <TextField name="phone" id="outlined-basic" label="Phone Number" variant="outlined" onChange={handleChange} value={form.phone}/>
            <Button variant="contained" type='submit' >Add Contact</Button>
        </form>
    </div>
  )
}

export default Form