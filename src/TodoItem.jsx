import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export function TodoItem({ name, isComplete }) {
    return (
        <li className="flex p-2">
            <label>
                <input type="checkbox" checked={isComplete} /> {name}
            </label>
            <button className="text-gray-500 hover:text-gray-700 active:text-gray-800 transition-colors">
                <FontAwesomeIcon icon={faTrashCan} title="Delete task" />
            </button>
        </li>
    );
}

