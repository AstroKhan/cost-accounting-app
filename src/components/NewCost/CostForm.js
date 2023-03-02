import './CostForm.css';
import React, { useState } from "react";

const CostForm = () => {
// multistate variant
  // const [name, setName] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
// single state with object variant
  const [userInput, setUserInput] = useState({
    name: '',
    amount: '',
    date: ''
  })

  const nameChangeHandler = (event) => {
    // setName(event.target.value);
    setUserInput({
      ...userInput,
      name: event.target.value
    })
  }
  const amountChangeHandler = (event) => {
    // setAmount(event.target.value);
    setUserInput({
      ...userInput,
      amount: event.target.value
    })
  }
  const dateChangeHandler = (event) => {
    // setDate(event.target.value);
    setUserInput({
      ...userInput,
      date: event.target.value
    })
  }

  return (
    <form>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' onChange={nameChangeHandler} />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input type='number' onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input type='date' onChange={dateChangeHandler} min='2019-01-01' step='2022-12-31' />
        </div>
        <div className='new-cost__actions'>
          <button type='submit'>Добавить Расход</button>
          <button type='reset'>Отмена</button>
        </div>
      </div>
    </form>
  )
}

export default CostForm