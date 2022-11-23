import React from 'react'
import Categories from '../components/Categories'
import Transactions from '../components/Transactions'
import styles from './home.module.scss'

const Home = () => {

    return (
        <div className={styles.container}>
            <Categories/>
            <Transactions/>
        </div>
    )
}

export default Home