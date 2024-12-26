import React, { useState, useEffect } from 'react';
import { fetchTasks, deleteTask } from './api/api';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskFilter from './components/TaskFilter';
import TaskDeleteDialog from './components/TaskDeleteDialog';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('');
  const [currentTask, setCurrentTask] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);

  // Fetch tasks from the API
  const loadTasks = async () => {
    try {
      const { data } = await fetchTasks();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  // Filter tasks by status
  const filteredTasks = filter ? tasks.filter((task) => task.status === filter) : tasks;

  // Handle task deletion
  const handleDeleteConfirm = async (taskId) => {
    try {
      await deleteTask(taskId);
      setShowDeleteDialog(false);
      setSelectedTask(null);
      loadTasks();
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Task Tracker</h1>
      
      {/* Header Inputs for Adding a Task */}
      <div className="task-header">
        <input type="text" placeholder="Task Name" className="task-input" />
        <input type="text" placeholder="Description" className="task-input" />
        <input type="date" className="task-date-picker" />
        <select className="task-dropdown">
          <option value="All">All</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
        <select className="task-dropdown">
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button className="add-task-button" onClick={() => { setCurrentTask(null); setShowModal(true); }}>
          Add Task
        </button>
      </div>
      
      {/* Task Filter */}
      <TaskFilter setFilter={setFilter} />

      {/* Task List */}
      <TaskList
        tasks={filteredTasks}
        editTask={(task) => {
          setCurrentTask(task);
          setShowModal(true);
        }}
        deleteTask={(task) => {
          setSelectedTask(task);
          setShowDeleteDialog(true);
        }}
      />

      {/* Task Form Modal */}
      {showModal && (
        <TaskForm
          currentTask={currentTask}
          refreshTasks={loadTasks}
          closeModal={() => setShowModal(false)}
        />
      )}

      {/* Task Delete Confirmation Dialog */}
      {showDeleteDialog && (
        <TaskDeleteDialog
          task={selectedTask}
          onDeleteConfirm={() => handleDeleteConfirm(selectedTask.id)}
          onCancel={() => setShowDeleteDialog(false)}
        />
      )}
    </div>
  );
};

export default App;
