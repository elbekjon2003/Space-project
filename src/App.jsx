import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Crew from './pages/Crew'
import Destination from './pages/Destination'
import HomePage from './pages/HomePage'
import Technology from './pages/Technology'
import Error from './pages/Error'


function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/destination' element={<Destination/>}></Route>
        <Route path='/crew' element={<Crew />}></Route>
        <Route path='/technology' element={<Technology/>}></Route>
        <Route path='*' element={<Error/>}></Route>
      </Routes>
    </>
    // <Routes>

    // </Routes>
  )
}

export default App
