import { useEffect,useState } from "react";

import { CleaningModeComponent } from "./cleaning-mode.styles";
import { useNavigate } from "react-router";


const CleaningMode = () => {
  const [counter,setCounter] = useState(30);
  const nav = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      setCounter(counter - 1)
    },1000)
    if (counter === 0) {
      nav('/');
    }
  },[counter]);

  return (
    <CleaningModeComponent>
      {counter}
      <div className="subtitle"> {counter !== 1 ? 'seconds' : 'second'} </div>
    </CleaningModeComponent>
  )
};

export default CleaningMode;