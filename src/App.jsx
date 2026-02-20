import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Login from './components/Login'
import AddToDo from './components/AddTodo'
import TesteState from './components/TesteState'
import Tasks from './components/Tasks'

function App() {
  const [task, SetTask] = useState([
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

  return (
    <div  className="min-h-screen p-8 bg-blue-50">
      <div className="max-w-2xl mx-auto p-6 flex flex-col items-center bg-white rounded-lg shadow-lg">
     <AddToDo />
     <Tasks tarefas={task}/>
     </div>
    </div>
  )
}

export default App;
