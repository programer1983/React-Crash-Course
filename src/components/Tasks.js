import tasks from './data';

const Tasks = () => {
    return (
        <>
           {tasks.map((tasck) => (
               <h3 key={tasck.id}>{tasck.text}</h3>
           ))}
            
        </>
    );
}

export default Tasks;
