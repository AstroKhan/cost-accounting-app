import CostItem from "./CostItem";
import "./Costs.css";
import Card from "./../UI/Card";
import CostFilter from "./CostFilter";
import { useState } from "react";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter(cost => {
    return cost.date.getFullYear().toString() === selectedYear
  })

  let costContent = <p>В этом году расходов нет</p>
  if (filteredCosts.length > 0) {
    costContent = filteredCosts.map((cost) => (
      <CostItem
        key={cost.id}
        date={cost.date}
        description={cost.description}
        amount={cost.amount}
      />
    ));
  }

  return (
    <div>
      <Card className="costs">
        <CostFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {costContent}
      </Card>
    </div>
  );
};

export default Costs;
