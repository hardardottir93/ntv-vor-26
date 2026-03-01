import { useState } from 'react';
import './App.css'
import { Input } from './components/Input'
import { ShopCard } from './components/ShopCard';

function App() {
  const [myName, setMyName] = useState('')
  const [email, setEmail] = useState('')

  return (
    <main>
      <h1>NTV Vor 26</h1>
      <div>{myName}</div>
      <div>
        <Input value={myName} onChange={(e) => setMyName(e.target.value)} type={'String'}/>
        <Input value={email} onChange={(e) => setEmail(e.target.value)} type={'email'}/>
        <button onClick={() => alert('Sent: ' + myName + '-' + email)}>
            Senda 
          </button>
      </div>

      <div>
        {/*Card*/}
        <ShopCard/>
      </div>

    </main>
  );

}

export default App
