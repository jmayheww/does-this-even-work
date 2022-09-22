import React from "react";

function Task({ text, category, setTasks, taskList }) {
  function handleDelete({ target }) {
    const taskSelection = target.previousSibling.innerText;
    console.log("taskSelection: ", taskSelection);

    setTasks((selectedTask) =>
      selectedTask.filter((task) => {
        return task.text !== taskSelection;
      })
    );

    console.log(taskList);
  }
  return (
    <div className="task">
      <div className="label">{category} </div>
      <div className="text">{text}</div>
      <button className="delete" onClick={handleDelete}>
        X
      </button>
    </div>
  );
}

export default Task;
