import { useState } from 'react';

export function AddTaskForm({ onAddTask }) {
    const [taskName, setTaskName] = useState("");
    const isDisabled = !taskName.trim();
    function handleAddClick() {
        if (isDisabled) return;

        onAddTask(taskName);
        setTaskName("");
    }

    return (
        <div className="flex gap-2 mb-4"> {/* Unfortunately comments in JSX have to be done like this */}
            <input
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="New task name"
                aria-label="New task name" />
            <button
                type="button"
                onClick={handleAddClick}
                disabled={isDisabled}
                className={`
                text-white 
              
                px-4 
                py-2 
                rounded-md 
                transition-colors 
                ${isDisabled ?
                        "bg-blue-300 cursor-not-allowed"
                        : "bg-blue-500 hover:bg-blue-600 active:bg-blue-700"
                    }
                `}
            >
                Add task
            </button>
        </div>
    );
}

