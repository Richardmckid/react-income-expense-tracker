// import {} from 'react'
import { Categories as Data } from '../Data'
import styles from './categories.module.scss'
import {MdAdd, MdDeleteOutline} from 'react-icons/md'

const Categories = () => {

  return (

    <div className={styles.container}>

      <h1>Categories</h1>

      <div>

        {

          Data.map(category => {

            return(

              <div key={category.id}>

                <h4>{category.label}</h4>

                <small>BWP 5007.90</small>
                <MdDeleteOutline onClick={(e) => console.log(e)} className={styles.delete_btn}/>
              </div>

            )

          })

        }

        <button><MdAdd/>Add New</button>

      </div>

    </div>

  )

}

export default Categories