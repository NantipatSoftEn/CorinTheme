import React from "react";
import "./App.css";
import Cards from './components/Cards'
import generateMain from "./hoc/generateMain";
const CardWithLayout = generateMain(Cards);
function App() {
  return (
    <div>
          <CardWithLayout />
    </div>

  );
}

export default App;
