// core
import { useState } from 'react'

// contrib
import { v4 as uuidv4 } from 'uuid';
import {MdDelete} from 'react-icons/md'
import { AiOutlinePlus } from 'react-icons/ai'

// custom
import Button from './misc/Button'
import classes from './categories.module.scss'
import TextInput from './misc/TextInput'

import {Categories as Data} from '../Data'

const Categories = () => {

  const [data, setData] = useState(Data)

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

    let updated = [newCat, ...data]
    setData(updated)
    setText('')
  }

  const handleDelete = (id) => {

    let updated = data.filter(item => item.id !== id)
    setData(updated)

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
              <MdDelete onClick={() => handleDelete(item.id)} className={classes.DelIcon}/>
            </li>
          ))
        }
      </ul>
    </aside>
  )
}

export default Categories