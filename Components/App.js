import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks] = useState(TASKS);

  const [curCat, setCurCat] = useState(CATEGORIES[0]);

  const onTaskFormSubmit = (newTask) => {
    setTasks([...tasks, newTask])
  }
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        curCat={curCat}
        setCurCat={setCurCat}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={onTaskFormSubmit}
        setTasks={setTasks}
      />
      <TaskList
        allTasks={TASKS}
        taskList={tasks}
        curCat={curCat}
        setTasks={setTasks}
      />
    </div>
  );
}

export default App;
