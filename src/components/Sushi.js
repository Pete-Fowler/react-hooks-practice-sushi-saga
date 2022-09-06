import React, { useState } from "react";

function Sushi({ name, imgUrl, price, made, purchase }) {
  const [ eaten, setEaten ] = useState(false);

  function handleEaten() {
    purchase(price) && setEaten(eaten => true);
  }

  return (
    <div className="sushi">
      <div className="plate" onClick={handleEaten}>
        {eaten ? '' : (
          <img
            src={imgUrl}
            alt={name}
            width="100%"
          />)}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
