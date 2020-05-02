import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Main from "./views/layout/Main";
import Cards from "./components/Cards";
import Forms from "./components/Forms";
import FormsContainner from "./container/FormsContainner";
import Table from "./components/Table";
import generateMain from "./hoc/generateMain";
const history = createBrowserHistory();
const CardWithLayout = generateMain(Cards);
const FormsWithLayout = generateMain(FormsContainner);
const TableWithLayout = generateMain(Table);
function App() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/form" component={FormsWithLayout} />
        <Route exact path="/card" component={CardWithLayout} />
        <Route exact path="/table" component={TableWithLayout} />
      </Router>
    </div>
  );
}

export default App;
