import React from "react";

function Sushi({ name, imgUrl, price, made }) {
  
  return (
    <div className="sushi">
      <div className="plate">
        {/* Tell me if this sushi has been eaten! */}
          <img
            src={imgUrl}
            alt={name}
            width="100%"
          />
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
