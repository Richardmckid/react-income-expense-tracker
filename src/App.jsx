import './App.scss'
import Home from './pages/Home'
import Graphs from './pages/Graphs'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar'

function App() {

  return (
    <div className="main">
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/graphs' element={<Graphs/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
