import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import HomePage from './components/pages/HomePage'
import RegisterPage from './components/pages/RegisterPage'
import LoginPage from './components/pages/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
<Routes>
  <Route path='/' element={<HomePage/>}/>
   <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/login' element={<LoginPage/>}/>
</Routes>

  </Router>
  )
}

export default App
