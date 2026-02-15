import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { TodoItem } from './TodoItem';
import { AddTaskForm } from './AddTaskForm';
import './App.css'

const MY_INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: true },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: false }
]

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST);

  return (
    <main className="m-4"> {/* Reminder: React code uses className instead of class */}

      <AddTaskForm />
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