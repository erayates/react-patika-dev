import React, { useState } from 'react'

import { send } from '../socketApi'

function Palette({activeColor}) {
  const [color,setColor] = useState('');

  return (
    <div style={{display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
      <h1>Palette</h1>
      <input type='color' onChange={(e) => setColor(e.target.value)} value={activeColor}></input>
      <br></br>
      <p><b>Color is selecting:</b> {color}</p>
      <p><b>Active Color: </b>{activeColor}</p>
      <br></br>
      <button onClick={() => send(color)}>Click!</button>
    </div>
  )
}

export default Palette