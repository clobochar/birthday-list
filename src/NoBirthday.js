import React, { useState } from "react";
import allMonths from "./data/dataMonths";

const NoBirthday = () => {
  const [month, setMonth] = useState(allMonths);
  return (
    <section>
      <h3>No birthdays this month</h3>
    </section>
  );
};

export default NoBirthday;
