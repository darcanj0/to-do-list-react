import "./Task.css";

const Task = ({
  title,
  completed,
  handleCompletedChange,
  identity,
  handleTaskDeletion,
}) => {
  return (
    <div
      className="Task"
      style={completed ? { borderLeft: "5px solid #01f25a" } : {}}
    >
      <span
        className={`${completed}`}
        onClick={() => handleCompletedChange(identity)}
      >
        {title}
      </span>
      <div className="Icons">
        <i className="bi bi-info-circle"></i>
        <i
          className="bi bi-x-lg"
          onClick={() => handleTaskDeletion(identity)}
        ></i>
      </div>
    </div>
  );
};

export default Task;
