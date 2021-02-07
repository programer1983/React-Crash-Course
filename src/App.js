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
  
  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? (
          <Tasks tasks={tasks} onDelete={deleteTask} />
          ) : (
              'No Tasks To Shou'
      )}
    </div>
  );
}


export default App;
