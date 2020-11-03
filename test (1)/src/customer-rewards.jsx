import React from "react";
import { customerData } from "./data";
import Grid from "./components/grid.component";

function CustomerRewards() {
  const calRewards = (perchase) => {
    if (perchase >= 50 && perchase < 100) {
      return perchase - 50;
    } else if (perchase > 100) {
      return 2 * (perchase - 100) + 50;
    }
    return 0;
  };

  const getLastThreeMonthsList = (list) => {
    const today = new Date();
    const lastThreeMonths = today.setMonth(today.getMonth() - 3);
    return list
      .map(({ id, perchase, date, name }) => ({
        id,
        name,
        date: new Date(date),
        perchase,
        rewards: calRewards(perchase),
      }))
      .filter((ele) => ele.date > lastThreeMonths)
      .sort((a, b) => b.date - a.date);
  };

  return <Grid data={getLastThreeMonthsList(customerData)} />;
}

export default CustomerRewards;
