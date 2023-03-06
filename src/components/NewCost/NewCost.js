import CostForm from './CostForm';
import './NewCost.css';

const NewCost = (props) => {
  const saveCostDataHendler = (inputCostData) => {

    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }

    props.onAddCost(costData);
  }
  return (
    <div className='new-cost'>
      <CostForm onSaveCostData={saveCostDataHendler}/>
    </div>
  )
}

export default NewCost