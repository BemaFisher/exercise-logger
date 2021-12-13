import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';
import { useState } from 'react'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();
  
  return (
    <div className="App">
      <Router>
        <div className="App-header">
          <Route path="/" exact>
            <HomePage setExerciseToEdit={setExerciseToEdit} />
          </Route>
          <Route path="/create">
            <CreatePage />
          </Route>
          <Route path="/edit">
            <EditPage exerciseToEdit={exerciseToEdit} />
          </Route>
          </div>
      </Router>
    </div>
  );
}

export default App;
