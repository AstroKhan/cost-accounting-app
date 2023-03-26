import './CostFilter.css';

const CostFilter = (props) => {

  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  }

  return (
    <div className='cost-filter'>
      <div className='cost-filter__control'>
        <label>фильтр по году</label>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default CostFilter