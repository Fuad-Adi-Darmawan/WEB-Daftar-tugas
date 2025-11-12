// Lokasi: src/App.js
import React, { useState } from 'react';
import { Container, Button } from 'react-bootstrap';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import 'bootstrap/dist/css/bootstrap.min.css'; // Tetap impor bootstrap dasar
import './App.css'; // Impor CSS Kustom kita

function App() {
  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleShowForm = () => setShowForm(true);
  const handleCloseForm = () => {
    setShowForm(false);
    setTaskToEdit(null);
  };

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const editTask = (updatedTask) => {
    setTasks(tasks.map(task => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const showEditForm = (task) => {
    setTaskToEdit(task);
    handleShowForm();
  };

  // Fungsi baru untuk toggle status (Anda bisa kembangkan ini)
  const toggleTaskStatus = (taskId) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, status: task.status === 'Done' ? 'To Do' : 'Done' } : task
    ));
  };


  return (
    <Container className="my-5">
      {/* Header Baru */}
      <div className="task-header">
        <h1>Task List</h1>
        <Button variant="primary" onClick={handleShowForm}>
          + Add Task
        </Button>
      </div>
      
      {/* Mengirim fungsi toggleTaskStatus ke TaskList */}
      <TaskList 
        tasks={tasks} 
        deleteTask={deleteTask} 
        showEditForm={showEditForm}
        toggleTaskStatus={toggleTaskStatus} 
      />
      
      <TaskForm
        show={showForm}
        handleClose={handleCloseForm}
        addTask={addTask}
        editTask={editTask}
        taskToEdit={taskToEdit}
      />
    </Container>
  );
}

export default App;