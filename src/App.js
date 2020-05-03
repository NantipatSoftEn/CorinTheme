import React from "react";
import { Router, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import "./App.css";
import Main from "./views/layout/Main";
import Cards from "./components/Cards";
import UsersContainner from "./container/UsersContainner";
import generateMain from "./hoc/generateMain";
const history = createBrowserHistory();
const CardWithLayout = generateMain(Cards);
const FormsWithLayout = generateMain(UsersContainner.FormsWithLogic);
const TableWithLayout = generateMain(UsersContainner.TableWithLogic);
function App() {
  return (
    <div>
      <Router history={history}>
        <Route exact path="/" component={Main} />
        <Route exact path="/form" component={FormsWithLayout} />
        <Route exact path="/card" component={CardWithLayout} />
        <Route exact path="/table" component={TableWithLayout} />
        <Route exact path="/form/:id/edit" component={FormsWithLayout} />
      </Router>
    </div>
  );
}

export default App;
