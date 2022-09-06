import React,  { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushiList, setSushiList ] = useState([]);
  const [ startIndex, setStartIndex ] = useState(0);
  const [ money, setMoney ] = useState(100);

  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then(res => res.json())
    .then(data => setSushiList(data));
  }, []);

  function showMore() {
    startIndex >= 95 ? setStartIndex(0) 
    : setStartIndex(startIndex => startIndex + 4);
  }

  function purchase(price) {
    if(money - price < 0) {
      return false;
    }
    setMoney(money => money - price);
    return true;
  }

  function addMoney(e, value) {
    e.preventDefault();
    setMoney(money => money + parseInt(value));
  }

  const sushiShown = sushiList.filter(item => 
    (sushiList.indexOf(item) >= startIndex 
    && sushiList.indexOf(item) <= startIndex + 3));
  
  return (
    <div className="app">
      <SushiContainer sushiShown={sushiShown} showMore={showMore} purchase={purchase}/>
      <Table money={money} addMoney={addMoney}/>
    </div>
  );
}

export default App;
