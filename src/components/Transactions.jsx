import styles from './transactions.module.scss'
import Button from './Button'

const Transactions = () => {
  return (
    <div className={styles.container}>

      <h1>Transactions</h1>
      <form>
        <div>
          <label>Transaction</label>
          <input type="text"/>
        </div>
        <div>
          <label>Transaction</label>
          <select>
            <option>Salary</option>
            <option>Rent</option>
          </select>
        </div>
        <div>
          <label>Amount</label>
          <input type="text"/>
        </div>
        {/* <div> */}

          <Button>Save</Button>
        {/* </div> */}
      </form>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Transaction</th>
            <th>Category</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>20/11/2022</td>
            <td>Pay Showmax</td>
            <td>Subscriptions</td>
            <td>- P216 <span>expense</span></td>
          </tr>
          <tr>
            <td>25/11/2022</td>
            <td>Pay Netflix</td>
            <td>Subscriptions</td>
            <td>- P159.99 <span>expense</span></td>
          </tr>
          <tr>
            <td>25/11/2022</td>
            <td>Dec Salary</td>
            <td>Salary</td>
            <td>+ P10000.00 <span>income</span></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Transactions