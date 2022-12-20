// core
import { useEffect } from 'react';

// contrib
import { Pie, Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

// custom
import classes from './graphs.module.scss'

// state
import { useSelector, useDispatch } from 'react-redux';
import { getCategoriesFromLocalStorage } from '../store/features/categorySlice';
import { getTransactionFromLocalStorage } from '../store/features/transactionSlice';

const Graphs = () => {


  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCategoriesFromLocalStorage())
    dispatch(getTransactionFromLocalStorage())
  },[])

  const categories = useSelector((state) => state.categories.value)
  const transactions = useSelector((state) => state.transactions.value)

  const getCategoryTitle = (val) =>{

    let cat = categories.find(el => el.id == val)

    if(!cat) return 'N/A'

    return cat.label
  }

  const chartData = {
    labels: transactions.map(item => getCategoryTitle(item.category)),
    datasets: [{
      label: "Transactions",
      data: transactions.map(item => item.amount),
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(255, 159, 64, 0.2)',
        'rgba(255, 205, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(201, 203, 207, 0.2)'
      ],
      borderColor: [
        'rgb(255, 99, 132)',
        'rgb(255, 159, 64)',
        'rgb(255, 205, 86)',
        'rgb(75, 192, 192)',
        'rgb(54, 162, 235)',
        'rgb(153, 102, 255)',
        'rgb(201, 203, 207)'
      ],
      borderWidth: 1
    }]
  }
  return (
    <section className={classes.graphWrapper}>
      <h1>Graphs/Charts</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, nesciunt?</p>

      <div style={{width: 700}}>
        <Pie data={chartData}  />
      </div>
      <div style={{width: 700}}>
        <Bar data={chartData}  />
      </div>
      <div style={{width: 700}}>
        <Line data={chartData}  />
      </div>
    </section>
  )
}

export default Graphs