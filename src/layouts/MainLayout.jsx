import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"


const MainLayout = () => {
  return (
    <div className="main-layout">
      <NavBar/>

      <div className="main-content-outlet">
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout