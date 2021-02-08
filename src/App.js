import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import tasks from './components/data';
import AddTask from './components/AddTask';

const data = tasks;

function App() {
  const [tasks, setTasks] = useState(data);
  const [showAddTask, setShowAddTask] = useState(false);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => task.id === id ? 
            {...task, reminder: !task.reminder} : task
      )
    )
  }
  
  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : (
              'No Tasks To Shou'
      )}
    </div>
  );
}


export default App;
