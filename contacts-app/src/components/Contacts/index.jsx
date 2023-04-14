import {useState} from 'react'
import List from './List'
import Form from './Form'




function Contacts() {
  const [contacts, setContacts] = useState([])

  return (
    <div className='w-2/3 flex flex-col items-center'>
    <h1 className='text-4xl font-bold my-4'>Contacts</h1>
    <List contacts = {contacts}/>

    <Form setContacts={setContacts} />
    </div>
  )
}

export default Contacts