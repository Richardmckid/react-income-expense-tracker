import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'

// Pages
import Home from './pages/Home'
import Graphs from './pages/Graphs'

// Layouts
import MainLayout from './layouts/MainLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/graphs' element={<Graphs/>}/>
    </Route>
  )
)

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
