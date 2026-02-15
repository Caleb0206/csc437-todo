import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { nanoid } from "nanoid";
import { TodoItem } from './TodoItem';
import { AddTaskForm } from './AddTaskForm';
import './App.css';

const MY_INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: false },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: false }
]

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST);

  function addTask(taskName) {
    const newTask = { id: nanoid(), name: taskName, isComplete: false };
    const taskListClone = [...taskList, newTask];
    setTaskList(taskListClone);
  }

  return (
    <main className="m-4">

      <AddTaskForm onAddTask={addTask} />
      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              name={task.name}
              isComplete={task.isComplete}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;