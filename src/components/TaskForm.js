import React, { useState } from 'react';
import { createTask, updateTask } from '../api/api';

const TaskForm = ({ currentTask, refreshTasks, closeModal }) => {
  const [task, setTask] = useState(currentTask || { name: '', description: '', dueDate: '', priority: 'Low', status: 'Pending' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (task._id) {
      await updateTask(task._id, task);
    } else {
      await createTask(task);
    }
    refreshTasks();
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Task Name" value={task.name} onChange={(e) => setTask({ ...task, name: e.target.value })} required />
      <textarea placeholder="Description" value={task.description} onChange={(e) => setTask({ ...task, description: e.target.value })} />
      <input type="date" value={task.dueDate} onChange={(e) => setTask({ ...task, dueDate: e.target.value })} required />
      <select value={task.priority} onChange={(e) => setTask({ ...task, priority: e.target.value })}>
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
      <select value={task.status} onChange={(e) => setTask({ ...task, status: e.target.value })}>
        <option>Pending</option>
        <option>In Progress</option>
        <option>Completed</option>
      </select>
      <button type="submit">Save Task</button>
    </form>
  );
};

export default TaskForm;
