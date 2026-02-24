import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Login from './components/Login'
import AddToDo from './components/AddTodo'
import Tasks from './components/Tasks'

function App() {
  const [task, setTask] = useState([
    {
      id: 1,
      title: "Estudar react",
      description: 'estudar fundamentos do react',
      isCompleted: false
    },
    {
      id: 2,
      title: "Ir à academia",
      description: 'treino de ombro',
      isCompleted: false
    },
    {
      id: 3,
      title: "Ver um filme",
      description: 'assistir serie',
      isCompleted: false
    }
  ])

  //adicionar tarefa
  const addTask = (title) =>{
    setTask([
      ...task,{
        id: Date.now(),
        title,
        isCompleted: false
      }
    ])
  }

  //marcar tarefa como concluida ou não concluida
  const toggleTask = (id)=>{
        setTask(
          task.map((t)=>
          t.id === id ? {...t, isCompleted : !t.isCompleted} : t)
        )
  }
    
  const deleteTask = (id)=>{
    setTask(task.filter((t)=> t.id !== id))
  }

  return (
    <div  className="min-h-screen p-8 bg-blue-50">
      <div className="max-w-2xl mx-auto p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
     <AddToDo onAdd={addTask} />
     <Tasks tarefas={task} onToggle={toggleTask} onDelete={deleteTask}/>
     </div>
    </div>
  )
}

export default App;
