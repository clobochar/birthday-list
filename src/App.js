import React, { useState } from "react";
import List from "./List";
import MonthMenu from "./MonthMenu";
import data from "./data/data";
import allMonths from "./data/dataMonths";
import NoBirthday from "./NoBirthday";

function App() {
  const [month, setMonth] = useState(allMonths);
  const [people, setPeople] = useState(data);

  const filterMonth = (month) => {
    if (month === "all") {
      setPeople(data);
      return;
    }
    const newItems = data.filter((person) => person.month === month);
    setPeople(newItems);
  };

  if (people.length === 0) {
    return (
      <main>
        <section className="container">
          <h3>List of birthdays</h3>
          <div className="container-menu">
            <MonthMenu month={month} filterMonth={filterMonth} />
          </div>
          <NoBirthday />
        </section>
      </main>
    );
  }

  return (
    <main>
      <section className="container">
        <h3>List of birthdays</h3>
        <div className="container-menu">
          <MonthMenu month={month} filterMonth={filterMonth} />
        </div>
        <List people={people} />
      </section>
    </main>
  );
}

export default App;
