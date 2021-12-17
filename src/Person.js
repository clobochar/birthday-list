import React from "react";

const Person = ({ id, name, age, image, day, month }) => {
  return (
    <article key={id} className="person">
      <img src={image} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>
          {day}/{month}
        </p>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person;
