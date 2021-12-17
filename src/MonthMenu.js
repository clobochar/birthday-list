import React from "react";

const MonthMenu = ({ month, filterMonth }) => {
  return (
    <div className="btn-container">
      {month.map((month, index) => {
        return (
          <button
            type="button"
            className="button"
            key={index}
            onClick={() => filterMonth(month)}
          >
            {month}
          </button>
        );
      })}
    </div>
  );
};

export default MonthMenu;
