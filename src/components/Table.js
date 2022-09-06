import React, { useState } from "react";

function Table({ plates = [], money, addMoney }) {
  const [ inputValue, setInputValue ] = useState(0);

  const emptyPlates = plates.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${money} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => addMoney(e, inputValue)}>
          Enter money to add: 
          <input type='text' value={inputValue} onChange={(e) => 
          setInputValue(e.target.value)} style={{width: '50px'}}/>
        </form>
      </div>
    </>
  );
}

export default Table;
