import { useState } from 'react'
import './App.css';
import Header from './components/Header';
import Tasks from './components/Tasks'

function App() {

  const [tasks, setTasks] = useState ([
    {
        id: 1,
        text: "Doctor's appointment",
        day: "Tomorrow",
        reminder: true
    },
    {
        id: 2,
        text: "Buy groceries",
        day: "Today",
        reminder: true
    },
    {
        id: 3,
        text: "Play FIFA",
        day: "Yesterday",
        reminder: false
    }
  ])

      //delete task

    const deleteTask = (id) => {
      console.log('delete' , id)
      setTasks(tasks.filter((task) => task.id !== id))
    }



  const name = "Marco Reus"
  const x    = "true"

  return (
    <div className="container">

      <Header title='Ballu' />

      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} />) : (' No tasks to show ')}

      <p>Heja BVB!!</p>
      <p>{name} #{ 5 + 6 }</p>
      <p> { x ? "Yes" : "No" } </p>
    
    </div>
  );
}

export default App;
