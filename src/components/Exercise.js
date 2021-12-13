import React from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date.substring(0,10)}</td>
            <td>< MdModeEdit onClick={() => onEdit(exercise)} /></td>
            <td>< MdDelete onClick={() => onDelete(exercise._id)} /></td>
        </tr>
    );
}

export default Exercise;