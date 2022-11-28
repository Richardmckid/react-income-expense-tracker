// import {} from 'react'
import { Categories as Data } from '../Data'
import styles from './categories.module.scss'
import {MdAdd, MdDeleteOutline} from 'react-icons/md'
import Button from './Button'

const Categories = () => {

  return (

    <div className={styles.container}>

      <h1>Categories</h1>
      <div className={styles.form_wrapper}>

        <form>
          <div>
            <label>Category</label>
            <input type="text"/>
          </div>
          <Button>Add New Category</Button>
        </form>
      </div>

      <div className={styles.categories}>

        {

          Data.map(category => {

            return(

              <div key={category.id}>

                <h4>{category.label}</h4>

                <MdDeleteOutline onClick={(e) => console.log(e)} className={styles.delete_btn}/>
              </div>

            )

          })

        }

        

      </div>

    </div>

  )

}

export default Categories