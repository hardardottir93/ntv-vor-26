import { useState } from 'react';
import './App.css'
import { Input } from './components/Input'
import { ShopCard } from './components/ShopCard';

function App() {

  return (
    <>
      <h1>NTV Vor 26</h1>

      <div>
        {/*Card*/}
        <ShopCard/>
        <ShopCard/>
      </div>

    </>
  );

}

export default App
