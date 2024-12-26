import React from 'react';

const TaskDeleteDialog = ({ task, onDeleteConfirm, onCancel }) => {
  if (!task) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.dialog}>
        <h3>Are you sure you want to delete this task?</h3>
        <p>
          <strong>Task Name:</strong> {task.name}
        </p>
        <p>
          <strong>Description:</strong> {task.description}
        </p>
        <div style={styles.actions}>
          <button style={styles.cancelButton} onClick={onCancel}>
            Cancel
          </button>
          <button style={styles.deleteButton} onClick={() => onDeleteConfirm(task._id)}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  dialog: {
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '5px',
    width: '400px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  actions: {
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: '#fff',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default TaskDeleteDialog;
