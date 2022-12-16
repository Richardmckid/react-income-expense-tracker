import React from 'react'
import { RiHomeFill, RiBarChartFill } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <header>
        <NavLink to='/'><RiHomeFill/></NavLink>
        <NavLink to='/graphs'><RiBarChartFill/></NavLink>
    </header>
  )
}

export default NavBar