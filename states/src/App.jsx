import { useState } from 'react'
import './App.css'
import Counter from './components/Counter';
import Form from './components/Form';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [friends, setFriends] = useState([])
  const [friend, setFriend] = useState('')
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    zip: ''
  })


  return (
    <>
      <h3>Hey! {name === '' || age === 0 || age === '' ? `You didn't set your name or age.That's why, You don't see your name and age.`: `Welcome ${name}. Your age is ${age}. Your friends ${friends}`}</h3>
      <h3>Your Address: {address.street} {address.city} {address.state} {address.zip}</h3>
      <h3>Set Your Name:</h3>
      <input type='text' onChange={(e) => setName(e.target.value)}></input>

      <h3>Set Your Name:</h3>
      <input type='number' onChange={(e) => setAge(e.target.value)}></input>

      <h3>Add a Friend</h3>
      <div style={{display: 'flex', flexDirection: 'column'}}>
      <input type='text' onChange={(e) => setFriend(e.target.value)}></input>
      <button onClick={() => setFriends([...friends,friend])}>Add A Friend</button>
      </div>

      <h3>Set Your Address</h3>
      <form style={{display: 'flex', flexDirection: 'column'}}>
        <input type='text' placeholder='Street' onChange={(e) => setAddress({...address, street: e.target.value})}></input>
        <input type='text' placeholder='City' onChange={(e) => setAddress({...address, city: e.target.value})}></input>
        <input type='text' placeholder='State' onChange={(e) => setAddress({...address, state: e.target.value})}></input>
        <input type='text' placeholder='Zip' onChange={(e) => setAddress({...address, zip: e.target.value})}></input>
      </form>

      <Counter />
      <Form />
    </>
  )
}

export default App
