// core
import { useState } from 'react'

// contrib
import { AiOutlinePlus } from 'react-icons/ai'

// custom
import classes from './home.module.scss'
import TransactionForm from '../components/TransactionForm';
import Button from '../components/misc/Button';
import Transactions from '../components/Transactions';

// state
import { useSelector, useDispatch } from 'react-redux';
import { openModal } from '../store/features/modalSlice';

const Home = () => {

  const showModal = useSelector((state) => state.modal.isOpen)
  
  const dispatch = useDispatch()

  const handleOpenCreateFrom = () => {
    


  }
  return (
    <section className={classes.homeWrapper}>
      <h1>Transactions</h1>
      <div className={classes.createSection}>
        <Button
          onClick={() => dispatch(openModal())}
          children={'Create New'}
          icon = {<AiOutlinePlus/>}
          // className='btn-primary btn-sm'
          style={{
            fontSize: '18px',
            // fontWeight: 800
            display: 'flex',
            justifyContent: 'space-between',
            width: '200px',
            border: '1px solid rgb(0, 85, 255)'
          }}
        />
       { showModal && <TransactionForm/> }
      </div>

      <div className={classes.transactionsWrapper}>
        <Transactions/>
      </div>
    </section>
  )
}

export default Home