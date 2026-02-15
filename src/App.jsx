import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { TodoItem } from './TodoItem';
import { AddTaskForm } from './AddTaskForm';
import './App.css'

function App() {
  return (
    <main className="m-4"> {/* Reminder: React code uses className instead of class */}

      <AddTaskForm />
      <section>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          <TodoItem name="Eat" isComplete={true} />
          <TodoItem name="Sleep" isComplete={false} />
          <TodoItem name="Repeat" isComplete={false} />
        </ul>
      </section>
    </main>
  );
}

export default App;