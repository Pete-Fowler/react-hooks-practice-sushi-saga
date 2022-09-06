import React from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi';

function SushiContainer({ sushiShown }) {
  
  const sushi = sushiShown.map(item =>
    <Sushi 
      key={item.id} 
      name={item.name} 
      imgUrl={item.img_url} 
      price={item.price} 
      made={item.created_at}
    />);

  return (
    <div className="belt">
      {sushi}
      <MoreButton />
    </div>
  );
}

export default SushiContainer;
