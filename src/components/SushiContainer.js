import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi"

function SushiContainer({sushis, eatSushi}) {

  const [sushiIndex, setSushiIndex] = useState(0)
  const sushiShown = 4

  function handleMoreSushi() {
    setSushiIndex(sushiIndex + sushiShown)
  }

 

  return (
    <div className="belt">
      {sushis.slice(sushiIndex, sushiIndex + sushiShown).map((sushi) => 
      <Sushi 
        key={sushi.id} 
        sushi={sushi}
        eatSushi={eatSushi}
        />)}
      <MoreButton handleClick={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
