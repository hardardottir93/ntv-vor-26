import "./App.css";

import { ShopCard } from "./components/ShopCard";
import { Form } from "./components/Form";

function App() {
  return (
    <>
      <h1>NTV Vor 26</h1>

      <div>
        {/*Card*/}
        <ShopCard />
        <ShopCard />
        <Form />
      </div>
    </>
  );
}

export default App;
