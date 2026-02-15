import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';

export function TodoItem({ id, name, isComplete, onToggleCheck, onDelete }) {
    return (
        <li className="flex p-2">
            <label>
                <input
                    type="checkbox"
                    className="mr-2"
                    checked={isComplete}
                    onChange={() => onToggleCheck(id)}
                />
                {name}
            </label>
            <button
                className="text-gray-500 hover:text-gray-700 active:text-gray-800 transition-colors"
                onClick={() => onDelete(id)}>
                <FontAwesomeIcon icon={faTrashCan} title="Delete task" />
            </button>
        </li>
    );
}

