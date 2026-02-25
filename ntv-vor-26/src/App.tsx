import { useState } from 'react';
import './App.css'

function App() {
  const [myName, setMyName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <main>
      <h1>NTV Vor 26</h1>

      <div>
        <input
          type='text'
          value={myName}
          onChange={(e) => setMyName(e.target.value)}
          placeholder='Nafn'
        />

        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='Netfang'
        />
        
        <button onClick={() => alert('Sent: ' + myName + '-' + email)}>
            Senda 
          </button>
      </div>

    </main>
  );

}

export default App
