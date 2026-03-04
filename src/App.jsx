import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Login from './components/Login'
import AddToDo from './components/AddTodo'
import Tasks from './components/Tasks'

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const handleLogin = (email, password) =>{
    if(email === "user@email.com" && password === "1234"){
      setIsLogged(true)
    }else{
      alert("dados incorretos")
    }
  }

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
    //deletar tarefa
  const deleteTask = (id)=>{
    setTask(task.filter((t)=> t.id !== id))
  }

  return (
    <div  className="min-h-screen p-8 bg-gray-300 flex items-center">
      
        {!isLogged ?(
          <Login onLogin={handleLogin} />
        ):(
          <div className="w-full max-w-2xl p-6 flex flex-col bg-slate-200 rounded-lg shadow-lg mx-auto my-auto">
          <AddToDo onAdd={addTask} />
          <Tasks tarefas={task} onToggle={toggleTask} onDelete={deleteTask}/>     
          </div>
        )
      }
    </div>
  )
}

export default App;
