export function AddTaskForm() {
    return (
        <div className="flex gap-2 mb-4"> {/* Unfortunately comments in JSX have to be done like this */}
            <input className="border border-gray-400 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400" placeholder="New task name" aria-label="New task name" />
            <button className="
                text-white 
                bg-blue-500 
                px-4 
                py-2 
                rounded-md 
                transition-colors 
                hover:bg-blue-600 
                active:bg-blue-700 
                "
            >
                Add task
            </button>
        </div>
    );
}

