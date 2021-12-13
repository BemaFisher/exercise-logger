import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TableHead from '../components/TableHead';

let todayDate = new Date(); 
let today = todayDate.getFullYear()+'-'+(todayDate.getMonth()+1)+'-'+todayDate.getDate(); 

export const CreatePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState(today);

    const history = useHistory();
    
    const createExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if(response.status === 201){
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        
        history.push("/");
    };

    return (
        <div>
            <h2>Create Exercise</h2>
            <table>
                <TableHead />
                <tr>
                    <td><input
                            type="text"
                            placeholder="Exercise Name"
                            value={name}
                            onChange={e => setName(e.target.value)} /></td>
                    <td><input
                            type="number"
                            value={reps}
                            placeholder="Reps"
                            min="0"
                            onChange={e => setReps(e.target.value)} /></td>
                    <td><input
                            type="number"
                            value={weight}
                            placeholder="Weight"
                            min="0"
                            onChange={e => setWeight(e.target.value)} />  </td>
                    <td><select value={unit} onChange={e => setUnit(e.target.value)}>
                            <option value='lbs'selected>lbs</option>
                            <option value='kgs'>kgs</option>
                        </select></td>
                    <td><input
                            type="date"
                            placeholder="Date"
                            value={date}
                            onChange={e => setDate(e.target.value)} /></td>
                </tr>
            </table>         
            <button onClick={createExercise}>Add</button>
        </div>
    );
}

export default CreatePage;