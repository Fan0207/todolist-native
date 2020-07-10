import React, { useState, useEffect } from "react";
import Task from "./Task";

function TaskList() {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Faire l'exo météo" },
    { id: 2, title: "Faire l'exo MERISE" },
    { id: 2, title: "Faire symfony" },
  ]);

  return (
    <ul>
      {tasks.map((task) => (
        <li>
          <Task id={task.id} title={task.title} />
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
