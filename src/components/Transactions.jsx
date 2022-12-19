// core


// contrib
import { MdEdit } from 'react-icons/md'

//custom
import classes from './transactions.module.scss'

// state
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/features/modalSlice';


const Transactions = () => {

  const transactions = useSelector((state) => state.transactions.value)
  
  const dispatch = useDispatch()
  return (
    <div className={classes.transactionsContainer}>

      <div className={classes.row}>
        <div className={classes.colTitle}>
          <h2>Pay Showmax subcription</h2>
          <span>24/11/2021</span>
        </div>
        <div className={classes.colCat}>
          <span>Subscriptions</span>
        </div>
        <div className={classes.lastCol}>
          <span>216.00</span>
          <MdEdit className={classes.editIcon} />
        </div>
      </div>
      
      <div className={classes.row}>
        <div className={classes.colTitle}>
          <h2>Pay Showmax subcription</h2>
          <span>24/11/2021</span>
        </div>
        <div className={classes.colCat}>
          <span>Subscriptions</span>
        </div>
        <div className={classes.lastCol}>
          <span>216.00</span>
          <MdEdit className={classes.editIcon} />
        </div>
      </div>
      
    </div>
  )
}

export default Transactions