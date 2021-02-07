import { useState } from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import tasks from './components/data';

const data = tasks;

function App() {
  const [tasks, setTasks] = useState(data);

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
      <Header />
      {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
          ) : (
              'No Tasks To Shou'
      )}
    </div>
  );
}


export default App;
