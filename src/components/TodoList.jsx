import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    { id: 1, text: "Build Interactive Portfolio with React", completed: true },
    { id: 2, text: "Deploy React App & Connect GitHub", completed: false },
    { id: 3, text: "Explore AI Agents & RAG Pipelines", completed: false }
  ]);
  const [input, setInput] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setTasks([...tasks, { id: Date.now(), text: input, completed: false }]);
    setInput('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const completedCount = tasks.filter(t => t.completed).length;
  const progressPercentage = tasks.length ? Math.round((completedCount / tasks.length) * 100) : 0;

  return (
    <section className="section">
      <div className="todo-header-container">
        <h2 className="section-title">
          <span>🎯</span> Interactive Task Manager
        </h2>
        <div className="progress-box">
          <span>Overall Progress: {progressPercentage}%</span>
          <div className="progress-bar-bg">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>

      <div className="todo-card">
        <form onSubmit={addTask} className="todo-input-group">
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new main milestone..." 
          />
          <button type="submit" className="btn btn-primary">+ Add Goal</button>
        </form>

        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
              <div className="task-checkbox-text" onClick={() => toggleTask(task.id)}>
                <span className="checkbox">{task.completed ? '✓' : ''}</span>
                <span className="task-text">{task.text}</span>
              </div>
              <button onClick={() => deleteTask(task.id)} className="delete-icon">🗑️</button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TodoList;