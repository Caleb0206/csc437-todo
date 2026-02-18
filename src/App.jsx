import { useState } from 'react'
import { nanoid } from "nanoid";
import { TodoItem } from './TodoItem';
import { AddTaskForm } from './AddTaskForm';
import { Modal } from './Modal';
import './App.css';

const MY_INITIAL_TASK_LIST = [
  { id: "todo-0", name: "Eat", isComplete: false },
  { id: "todo-1", name: "Sleep", isComplete: false },
  { id: "todo-2", name: "Repeat", isComplete: false }
]

function App() {
  const [taskList, setTaskList] = useState(MY_INITIAL_TASK_LIST);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function addTask(taskName) {
    const newTask = { id: nanoid(), name: taskName, isComplete: false };
    const taskListClone = [...taskList, newTask];
    setTaskList(taskListClone);
    setIsModalOpen(false);
  }

  function toggleTaskCompleted(id) {
    const updatedTasks = taskList.map((task) => {
      if (id === task.id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });
    setTaskList(updatedTasks);
  }

  function deleteTask(id) {
    const updatedTasks = taskList.filter(task =>
      id !== task.id
    );
    setTaskList(updatedTasks);
  }

  return (
    <main className="m-4">
      <Modal headerLabel="New Task" isOpen={isModalOpen} onCloseRequested={() => setIsModalOpen(false)}>
        <AddTaskForm onAddTask={addTask} />
      </Modal>

      <section>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
          onClick={() => setIsModalOpen(true)}>
          Add Task
        </button>
        <h1 className="text-xl font-bold">To do</h1>
        <ul>
          {taskList.map((task) => (
            <TodoItem
              key={task.id}
              id={task.id}
              name={task.name}
              isComplete={task.isComplete}
              onToggleCheck={toggleTaskCompleted}
              onDelete={deleteTask}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default App;