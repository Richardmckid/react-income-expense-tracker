import { NavLink } from 'react-router-dom'
import { RiHomeFill, RiBarChartFill } from 'react-icons/ri'
import { MdMoney } from 'react-icons/md'


import './navbar.module.scss'

const NavBar = () => {

  return (
    <header>
        <NavLink to='/'><MdMoney/> </NavLink>
        <NavLink to='/'><RiHomeFill/></NavLink>
        <NavLink to='/graphs'><RiBarChartFill/></NavLink>
    </header>
  )
}

export default NavBar