// core
import { useState, useEffect } from 'react'

// contrib
import { v4 as uuidv4 } from 'uuid';
import {MdDelete} from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

// custom
import Button from './misc/Button'
import classes from './categories.module.scss'
import TextInput from './misc/TextInput'

// state
import { useSelector, useDispatch } from 'react-redux';
import { deleteCategory, getCategoriesFromLocalStorage, addNewCategory } from '../store/features/categorySlice'

const Categories = () => {

  const dispatch = useDispatch()

  const data = useSelector((state) => state.categories.value)

  useEffect(() => {
    dispatch(getCategoriesFromLocalStorage())
  },[])


  const [text, setText] = useState('')

  const handleAdd = (e) =>{
    e.preventDefault()

    if(text.length < 1) return alert('Category is required')

    let newCat = {
      id: uuidv4(),
      label: text
    }

    let category = data.find(item => item.label === newCat.label)
    if(category) return alert(`${text} already exists`);

    dispatch(addNewCategory(newCat))
    setText('')
  }

 
  return (
    <aside className={classes.categoriesWrapper}>
      <h2>CATEGORIES</h2>
      <div>
        <TextInput
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <Button
          onClick={handleAdd}
          children={<AiOutlinePlus/>}
          className='btn-primary btn-sm'
          style={{
            fontSize: '18px',
            // fontWeight: 800
          }}
         />
      </div>

      <ul>
        {
          data.map(item => (
            <li key={item.id}>
              <span>{item.label}</span>
              <MdDelete onClick={() => dispatch(deleteCategory(item.id))} className={classes.DelIcon}/>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Categories