import { useState } from 'react';
import './App.css';
import TaskList from './Components/TaskList';
import TaskDetail from './Components/TaskDetail';
import { initialTasksData } from './initialTasksData';

function App() {
  const [activeComponent, setActiveComponent] = useState("TaskList")
  const [activeTask, setActiveTask] = useState()
  const [tasks, setTasks] = useState(initialTasksData)
  const removeTask = (id) => setTasks(tasks.filter(task => task.id !== id));

  const assignees = ["John","Jack"];
  

  return (
    <div className="App">
      {activeComponent === 'TaskList' ? <TaskList tasks={tasks} assignees={assignees} setActiveComponent={setActiveComponent} setActiveTask={setActiveTask}/> : null}
      {activeComponent === 'TaskDetail' ? <TaskDetail task={activeTask} setActiveComponent={setActiveComponent} removeTask={removeTask}/> : null}
    </div>
  );
}

export default App;
