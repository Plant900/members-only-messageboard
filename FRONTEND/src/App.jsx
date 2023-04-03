import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home.jsx'
import { Login } from './pages/Login.jsx'
import { Signup } from './pages/Signup.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

export default App
