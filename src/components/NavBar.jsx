import React from 'react'
import { Link } from 'react-router-dom'
import styles from './navbar.module.scss'
import { MdMoney, MdOutlineAreaChart, MdHome } from 'react-icons/md'
const NavBar = () => {

    return (
        <aside className={styles.navbar}>

            <header><MdMoney className={styles.icon}/> <h1>Zaka</h1></header>

            <nav>
                <ul>
                    <li> <Link to='/' className={styles.link}><MdHome /><span>Home</span></Link></li>
                    <li> <Link to='/graphs' className={styles.link}><MdOutlineAreaChart /><span>Graphs</span></Link></li>
                </ul>
            </nav>

        </aside>
    )
}

export default NavBar