// core
import { useState } from 'react'

// contrib
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



// custom
import Button from './misc/Button'
import SelectInput from '../components/misc/SelectInput'
import TextInput from '../components/misc/TextInput'
import { Categories } from '../Data'
import './transactionform.module.scss'


// state
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/features/modalSlice';


const TransactionForm = () => {

    const categories = useSelector((state) => state.categories.value)
  
    const dispatch = useDispatch()

    const handleSave = (e) => {
        e.preventDefault();
        console.log(e)
    }


    const [selectedCat, setSelectedCat] = useState(undefined)
    const [date, setDate] = useState(new Date())
    return (
        <div className="overlay">         

            <form>
                <TextInput
                placeholder='Transaction Title'
                />

                <DatePicker selected={date} onChange={(d) => setDate(d)} />

                <TextInput
                placeholder='Transaction Amount'
                />
                
                <SelectInput
                onChange={e => setSelectedCat(e.target.value)}
                value={selectedCat}
                options={categories}
                />

                <Button
                    onClick={handleSave}
                    children={'Save'}
                    className='btn-primary'
                    type='submit'
                    // disabled = {true}
                    style={{
                    fontSize: '18px',
                    
                    // fontWeight: 800
                    }}
                />
                <Button
                    onClick={() => dispatch(closeModal())}
                    children={'Close'}
                    className='btn-secondary'
                    // disabled = {true}
                    style={{
                    fontSize: '18px',
                    
                    // fontWeight: 800
                    marginTop: '.5rem'
                    }}
                />
            </form>
        </div>
    )
}

export default TransactionForm