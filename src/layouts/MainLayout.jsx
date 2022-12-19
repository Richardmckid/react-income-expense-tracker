import { NavLink, Outlet } from "react-router-dom"
import Categories from "../components/Categories"
import NavBar from "../components/NavBar"


import classes from './mainlayout.module.scss'


const MainLayout = () => {
  return (
    <div className={classes.mainLayout}>

      <div className={classes.sideNav}>
        
        <NavBar/>
      </div>

      <div className={classes.sideCategories}>
        
        <Categories/>
      </div>


      <div className={classes.mainContentOutlet}>
        <Outlet/>
      </div>
    </div>
  )
}

export default MainLayout