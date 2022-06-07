import "./Task.css";

import { useHistory, Link } from "react-router-dom";

const Task = ({
  title,
  completed,
  handleCompletedChange,
  identity,
  handleTaskDeletion,
}) => {
  const history = useHistory();

  const handleTaskDetailsClick = () => {
    history.push(`/${title}`);
  };

  return (
    <div
      className="Task"
      style={completed ? { borderLeft: "5px solid #01f25a" } : {}}
    >
      <span onClick={() => handleCompletedChange(identity)}>{title}</span>
      <div className="Icons">
        <i className="bi bi-info-circle" onClick={handleTaskDetailsClick}></i>
        <i
          className="bi bi-x-lg"
          onClick={() => handleTaskDeletion(identity)}
        ></i>
      </div>
    </div>
  );
};

export default Task;
