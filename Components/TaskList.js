import React from "react";
import { TASKS } from "../data";
import Task from "./Task";

function TaskList({ allTasks, setTasks, taskList, curCat }) {
  const filteredTasks =
    taskList &&
    taskList.filter(({ category }) => {
      return curCat === "All" ? true : category === curCat;
    });
  return (
    <div className="tasks">
      {taskList
        ? filteredTasks.map((tsk) => {
            const taskProps = { ...tsk, setTasks };
            return <Task key={tsk.text} {...taskProps} />;
          })
        : allTasks.map((tsk, index) => (
            <div
              key={index}
              className={"task"}
              text={tsk.text}
              category={tsk.category}
            />
          ))}
    </div>
  );
}

export default TaskList;
