import React from 'react'
import DiagramBar from './DiagramBar';
import './Diagram.css';

const Diagram = (props) => {

  const dataSetValues = props.dataSets.map(dataSet => dataSet.value)

  const maxMounthCosts = Math.max(...dataSetValues)
  return (
    <div className='diagram'>
    {props.dataSets.map(dataSet => <DiagramBar
        key={dataSet.label}
        value={dataSet.value}
        maxValue={maxMounthCosts}
        label={dataSet.label}
    />)}
    </div>
  )
}

export default Diagram