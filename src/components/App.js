import React, {useEffect, useState} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushis, setSushis] = useState([])
  const [money, setMoney] = useState(100)
 

useEffect(() => {
  fetch("http://localhost:3001/sushis")
  .then(res => res.json())
  .then(sushis => setSushis(sushis))
}, [])

function handleEatSushi(sushi) {
  if (sushi.price <= money) {
    setSushis(
      sushis.map(s => sushi.id === s.id ? {...s, eaten: true}: s)
      )
      setMoney(money - sushi.price )
  } else {
    alert('You Need More Money')
  }
}

  return (
    <div className="app">
      <SushiContainer sushis={sushis} eatSushi={handleEatSushi} />
      <Table plates={sushis.filter(s => s.eaten) } money={money}/>
    </div>
  );
}

export default App;
