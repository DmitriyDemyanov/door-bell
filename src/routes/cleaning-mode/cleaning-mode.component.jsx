import { useEffect,useState } from "react";
import { useNavigate } from "react-router";

import { CleaningModeComponent } from "./cleaning-mode.styles";

const CleaningMode = () => {
  const [counter,setCounter] = useState(30);
  const nav = useNavigate();
  useEffect(() => {
    if (counter <= 0) {
      nav('/');
    } else {
      setTimeout(() => {
        setCounter(counter - 1)
      },1000)
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
