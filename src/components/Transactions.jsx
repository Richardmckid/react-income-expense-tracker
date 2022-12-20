// core
import { useEffect } from 'react';

// contrib
import { MdEdit } from 'react-icons/md'

//custom
import classes from './transactions.module.scss'

// state
import { useSelector, useDispatch } from 'react-redux';
import { closeModal, openModal } from '../store/features/modalSlice';
import { getTransactionFromLocalStorage, editQueue } from '../store/features/transactionSlice';


const Transactions = () => {

  const dispatch = useDispatch()

  const transactions = useSelector((state) => state.transactions.value)
  const categories = useSelector((state) => state.categories.value)

  useEffect(() =>{
    dispatch(getTransactionFromLocalStorage())
  },[])


  const category = (val) =>{

    let cat = categories.find(el => el.id == val)

    if(!cat) return 'N/A'

    return cat.label
  }

  const handleEdit = (id) =>{

    dispatch(editQueue(id))
    dispatch(openModal())
    
  }



  
  


  if(!transactions.length) return(<div className={classes.transactionsContainer}>No Transaction made</div>)
  return (
    <div className={classes.transactionsContainer}>

      {
        transactions.map(item => (
          <div className={classes.row} key={item.id}>
            <div className={classes.colTitle}>
              <h2>{item.label}</h2>
              <span>
                {
                 item.date
                }
              </span>
            </div>
            <div className={classes.colCat}>
              <span>
                {
                  category(item.category)
                }
              </span>
            </div>
            <div className={classes.lastCol}>
              <span>{item.amount}</span>
              <MdEdit className={classes.editIcon} onClick={() => handleEdit(item.id)}/>
            </div>
          </div>
        ))
      }

      {/* <div className={classes.row}>
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
      </div> */}
      
    </div>
  )
}

export default Transactions