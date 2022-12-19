// core
import { useState } from 'react'


// contrib
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// custom
import SelectInput from '../components/misc/SelectInput'
import TextInput from '../components/misc/TextInput'
import classes from './home.module.scss'
import { Categories } from '../Data'
import TransactionForm from '../components/TransactionForm';

const Home = () => {

  const [selectedCat, setSelectedCat] = useState(null)
  const [date, setDate] = useState(new Date())
  return (
    <section className={classes.homeWrapper}>
      <h1>Transactions</h1>
      <div className="pos-abs">
       <TransactionForm/>
      </div>
    </section>
  )
}

export default Home