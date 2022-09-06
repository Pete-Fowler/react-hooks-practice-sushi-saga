import React,  { useState, useEffect } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [ sushiList, setSushiList ] = useState([]);
  
  useEffect(() => {
    fetch('http://localhost:3001/sushis')
    .then(res => res.json())
    .then(data => setSushiList(data));
  }, []);

  const startIndex = 0;

  const sushiShown = sushiList.filter(item => 
    (sushiList.indexOf(item) >= 0 
    && sushiList.indexOf(item) <= startIndex + 3));

  return (
    <div className="app">
      <SushiContainer sushiShown={sushiShown}/>
      <Table />
    </div>
  );
}

export default App;
