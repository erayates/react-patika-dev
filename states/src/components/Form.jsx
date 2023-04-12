import { useState } from "react"

function Form() {
    const [form, setForm] = useState({
        fname: '',
        lname: '' 
    })

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value});
    }


  return (
    <div style={{marginTop: '64px'}}>
        Form
        <input name="fname" type="text" placeholder="First Name" onChange={(e) => handleChange(e)}></input>
        <input name="lname" type="text" placeholder="Last Name" onChange={(e) => handleChange(e)}></input>
        <p>{form.lname} {form.fname}</p>
    </div>
  )
}

export default Form