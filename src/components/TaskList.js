// Lokasi: src/components/TaskList.js
import React from 'react';
// Impor Ikon
import { FiCircle, FiCheckCircle, FiEdit, FiTrash2 } from 'react-icons/fi';

// Helper untuk mengubah string menjadi kelas CSS
const getPriorityClass = (priority) => {
  return `priority-${priority}`; // Menghasilkan "priority-High", "priority-Medium", dst.
};

const getStatusClass = (status) => {
  // Mengganti spasi dengan strip, misal "In Progress" -> "status-In-Progress"
  return `status-${status.replace(/\s+/g, '-')}`; 
};

const TaskList = ({ tasks, deleteTask, showEditForm, toggleTaskStatus }) => {
  return (
    <div>
      {/* Hapus div header 'Task' 'Priority' 'Status' 'Actions' jika ada */}
      
      {tasks.length === 0 ? (
        <p className="text-center">Belum ada task. Silakan tambahkan!</p>
      ) : (
        tasks.map((task) => (
          // Ini adalah 'kartu' task kustom kita
          <div className="task-item" key={task.id}>
            
            {/* Kolom Task */}
            <div className="task-item-col">
              <span className="col-label">Task</span>
              <span className="col-value">{task.name}</span>
            </div>

            {/* Kolom Priority */}
            <div className="task-item-col">
              <span className="col-label">Priority</span>
              <span className={`col-value ${getPriorityClass(task.priority)}`}>
                {task.priority}
              </span>
            </div>

            {/* Kolom Status */}
            <div className="task-item-col">
              <span className="col-label">Status</span>
              <span className={`status-badge ${getStatusClass(task.status)}`}>
                {task.status}
              </span>
            </div>

            {/* Kolom Ikon Check/Circle */}
            <div className="task-actions">
              {task.status === 'Done' ? (
                <FiCheckCircle 
                  className="icon-btn icon-check" 
                  onClick={() => toggleTaskStatus(task.id)}
                />
              ) : (
                <FiCircle 
                  className="icon-btn icon-check" 
                  onClick={() => toggleTaskStatus(task.id)}
                />
              )}
            </div>

            {/* Kolom Ikon Edit & Delete */}
            <div className="task-actions">
              <FiEdit 
                className="icon-btn icon-edit" 
                onClick={() => showEditForm(task)}
              />
              <FiTrash2 
                className="icon-btn icon-delete" 
                onClick={() => deleteTask(task.id)}
              />
            </div>

          </div>
        ))
      )}
    </div>
  );
};

export default TaskList;