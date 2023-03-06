import './CostForm.css';
import React, { useState } from "react";

const CostForm = (props) => {
// multistate variant
  const [nameInput, setInputName] = useState('');
  const [amountInput, setInputAmount] = useState('');
  const [dateInput, setInputDate] = useState('');
// single state with object variant:
  // const [userInput, setUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // })

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // setUserInput({
    //   ...userInput,
    //   name: event.target.value
    // })
  // better variant:
    // setUserInput((prevState) => {
    //   return {
    //     ...prevState,
    //     name: event.target.value
    //   }
    // })
  }
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   amount: event.target.value
    // })
  }
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   date: event.target.value
    // })
  }

  const submitHendler = (event) => {
    event.preventDefault();
    const costData = {
      name: nameInput,
      amount: amountInput,
      date: new Date(dateInput)
    }
    props.onSaveCostData(costData)
    setInputName('');
    setInputAmount('');
    setInputDate('');
  }

  return (
    <form onSubmit={submitHendler}>
      <div className='new-cost__controls'>
        <div className='new-cost__control'>
          <label>Название</label>
          <input type='text' value={nameInput} onChange={nameChangeHandler} />
        </div>
        <div className='new-cost__control'>
          <label>Сумма</label>
          <input type='number' value={amountInput} onChange={amountChangeHandler} min='0.01' step='0.01' />
        </div>
        <div className='new-cost__control'>
          <label>Дата</label>
          <input type='date' value={dateInput} onChange={dateChangeHandler} min='2019-01-01' step='2022-12-31' />
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