import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('studyflow_tasks');
    if (saved) return JSON.parse(saved);
    return [
      { id: 1, title: 'Build Dockerfile for OS Lab', category: 'OS Lab', completed: true },
      { id: 2, title: 'Push clean commits to GitHub', category: 'Programming', completed: false }
    ];
  });
  
  const [currentFilter, setCurrentFilter] = useState('all');
  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('OS Lab');
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('studyflow_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const totalCount = tasks.length;
  const completedCount = tasks.filter(t => t.completed).length;
  const pendingCount = totalCount - completedCount;

  const filteredTasks = tasks.filter(task => {
    if (currentFilter === 'pending') return !task.completed;
    if (currentFilter === 'completed') return task.completed;
    return true;
  });

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    const newTask = {
      id: Date.now(),
      title: taskText.trim(),
      category: category,
      completed: false
    };
    setTasks([newTask, ...tasks]);
    setTaskText('');
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <div className="app-container">
      <header className="app-header">
        <div>
          <h1>StudyFlow Board</h1>
          <p className="subtitle">Organize your university labs, assignments, and daily goals</p>
        </div>
        <button 
          onClick={() => setIsDarkMode(!isDarkMode)} 
          className="btn-secondary"
        >
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </header>

      <section className="stats-bar">
        <div className="stat-box">
          <span>{totalCount}</span>
          <label>Total</label>
        </div>
        <div className="stat-box">
          <span>{pendingCount}</span>
          <label>Pending</label>
        </div>
        <div className="stat-box">
          <span>{completedCount}</span>
          <label>Completed</label>
        </div>
      </section>

      <form onSubmit={handleAddTask} className="task-form">
        <input 
          type="text" 
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          placeholder="e.g., Complete OS Lab Docker Assignment..." 
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="OS Lab">OS Lab</option>
          <option value="Design">Design</option>
          <option value="Programming">Programming</option>
        </select>
        <button type="submit" className="btn-primary">Add Task</button>
      </form>

      <div className="filter-bar">
        {['all', 'pending', 'completed'].map(filter => (
          <button 
            key={filter}
            className={`filter-btn ${currentFilter === filter ? 'active' : ''}`}
            onClick={() => setCurrentFilter(filter)}
          >
            {filter.charAt(0).toUpperCase() + filter.slice(1)}
          </button>
        ))}
      </div>

      <ul className="task-list">
        {filteredTasks.map(task => (
          <li key={task.id} className={`task-item ${task.completed ? 'completed' : ''}`}>
            <div>
              <input 
                type="checkbox" 
                checked={task.completed} 
                onChange={() => toggleTask(task.id)} 
              /> 
              <span className="task-title">{task.title}</span> 
              <span className="badge">{task.category}</span>
            </div>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}