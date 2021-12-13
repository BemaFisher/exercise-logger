import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit }) {
    const [exercises, setExercises] = useState([]);
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            const newExercises = exercises.filter(e => e._id !== _id);
            setExercises(newExercises);
        } else {
            console.error(`Failed to delete exercises with id = ${_id}, status code = ${response.status}`)
        }
    }	

    const onEdit = exercise => {
        setExerciseToEdit(exercise)
        history.push('/edit')
    }

    // Since we do not specify an HTTP method in the call to fetch, 
    // the default HTTP method GET is used.
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }
    // the function loadExercises() 
    // will only be called once in the lifecycle of the component MovieListPage, 
    // i.e., when the component is being mounted.
    useEffect(() => {
        loadExercises();
    }, []);
    
    return (
        <>
            <h2>My List of Exercises</h2>
            <ExerciseList exercises={exercises} 
                onDelete={onDelete} 
                onEdit={onEdit}>
            </ExerciseList>
            <Link to="/create"><h3>Create New Exercise</h3></Link>
        </>
    );
}

export default HomePage;