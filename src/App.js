import Header from './components/Header';
import Tasks from './components/Tasks';
import tasks from './components/data';

function App() {
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks}/>
    </div>
  );
}


export default App;
