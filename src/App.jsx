import { useState } from 'react'
import 'remixicon/fonts/remixicon.css'
import Login from './components/Login'
import ToDo from './components/Todo'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <>
   {isLoggedIn ? <ToDo /> : <Login handleLogin={setIsLoggedIn}/> }
    </>
  )
}

export default App;
