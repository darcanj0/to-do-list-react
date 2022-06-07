import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "components/Header/Header";
import TaskList from "components/TaskList/TaskList";
import TaskDetails from "components/TaskDetails/TaskDetails";

function App() {
  return (
    <Router>
      <div className="Container">
        <Header />
        <Router>
          <Route path="/" exact component={TaskList}></Route>
          <Route path="/:taskTitle" exact component={TaskDetails}></Route>
        </Router>
      </div>
    </Router>
  );
}

export default App;
