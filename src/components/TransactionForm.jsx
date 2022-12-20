// core
import { useState } from 'react'

// contrib
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { v4 as uuidv4 } from 'uuid';



// custom
import Button from './misc/Button'
import SelectInput from '../components/misc/SelectInput'
import TextInput from '../components/misc/TextInput'
import './transactionform.module.scss'


// state
import { useSelector, useDispatch } from 'react-redux';
import { closeModal } from '../store/features/modalSlice';
import { addNewTransaction, clearEditQueue, editTransaction } from '../store/features/transactionSlice';


const TransactionForm = () => {

    const categories = useSelector((state) => state.categories.value)
    const editItem = useSelector((state) => state.transactions.editItem)
  
    const dispatch = useDispatch()

    const transactDate = (val) => {

        let date = new Date(val)
        let res = date.toLocaleDateString([], {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        })

        return res
    }

    const handleSave = (e) => {
        e.preventDefault();
        if(!title.length || !amount.length || !selectedCat.length) return alert('Please all fields')

        if(editItem?.id){
            // handle update

            let transaction = {
                id: editItem.id, 
                label: title, 
                date: transactDate(date), 
                amount: amount, 
                category: selectedCat
            }
            dispatch(editTransaction(transaction))
            
        }else{
            let transaction = {
                id: uuidv4(), 
                label: title, 
                date: transactDate(date), 
                amount: amount, 
                category: selectedCat
            }

            dispatch(addNewTransaction(transaction))
            
        }
        dispatch(closeModal())
        dispatch(clearEditQueue())

    }

    const [id, setId] = useState(editItem !== undefined ? editItem.id : '')
    const [title, setTitle] = useState(editItem !== undefined ? editItem.label : '')
    const [amount, setAmount] = useState(editItem !== undefined ? editItem.amount : '')
    const [selectedCat, setSelectedCat] = useState(editItem !== undefined ? editItem.category : undefined)
    const [date, setDate] = useState(new Date())


    return (
        <div className="overlay">         

            <form>
                <TextInput
                    placeholder='Transaction Title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />

                <DatePicker selected={date} onChange={(d) => setDate(d)} />

                <TextInput
                    placeholder='Transaction Amount'
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
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
                    onClick={() => {
                        dispatch(closeModal());
                        dispatch(clearEditQueue());
                    }}
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