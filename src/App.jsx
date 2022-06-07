import "./App.css";
import React from "react";

import Header from "components/Header/Header";
import TaskList from "components/TaskList/TaskList";

function App() {
  return (
    <div className="Container">
      <Header></Header>
      <TaskList />
    </div>
  );
}

export default App;
