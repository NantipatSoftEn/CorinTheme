import React from "react";
import "./App.css";
import Cards from './components/Cards'
import Forms from './components/Forms'
import generateMain from "./hoc/generateMain";
const CardWithLayout = generateMain(Cards);
const FormsWithLayout = generateMain(Forms);
function App() {
  return (
    <div>
          <FormsWithLayout />
    </div>

  );
}

export default App;
