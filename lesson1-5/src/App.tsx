import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
// import { ShopCard } from "./components/ShopCard";

function App() {
  const [state, setState] = useState(true);
  return (
    <div className="w-full justify-center">
      {/* <ShopCard />
      <ShopCard /> */}
      {state && <Form />}
    </div>
  );
}

export default App;
