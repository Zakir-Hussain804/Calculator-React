import DisplayCalc from "./DisplayCalc";
import "./Calculator.css";
import BntCalculator from "./BntCalculator";
import { useState } from "react";
import { evaluate } from "mathjs"; 

const Calculator = () => {
              let [currentdisplay, setdisplay] = useState("");// create state display update
              const HandBnt = (event) => {                      //arrow function handle onClick run
                let currentValue = event.target.currentValue;                 //event.target.currentValue -> store varible
                let currentValueDisplay = [...currentdisplay, currentValue];   //create varible spread opeator using  current dispaly add new currentValue
                setdisplay(currentValueDisplay);                        //display show
                if (currentValue === "C") {
                  setdisplay("")                             //using condtion c display show clear
                }
                else if (currentValue === "del") {
                  let NewUpdatecurrentValue = currentdisplay.slice(0, -1);    //create variable currendisplay ek array slice using (0,-1) last index reomve 
                  setdisplay(NewUpdatecurrentValue)                      //display show
                }
                else if (currentValue === "=") {
                  let FinalResult = currentdisplay                //create new  variable store currentdisplay
                  let result = evaluate(FinalResult);         //create new variable store ->  method using evalualte working operator perform
                  setdisplay(String(result))                   //display show convert string
                }
                else {
                  let NewcurrentValue = currentdisplay + currentValue;
                  setdisplay(NewcurrentValue)
                }
  }
  return <>
    <div className="container">
      <div className="dispaly">
        <DisplayCalc currentdisplay={currentdisplay}></DisplayCalc>
      </div>
      <div className="bntDispaly">
        <BntCalculator HandBnt={HandBnt}></BntCalculator>
      </div>
    </div>
  </>
}

export default Calculator;