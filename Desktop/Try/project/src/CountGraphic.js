import React from "react"
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import "./style.css";


function CountGraphic(){
  function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}
  return(
<h1 class="timer-wrapper" >
<CountdownCircleTimer
isPlaying
duration={3}
colors={[
  ['#004777', 0.03],
  ['#F7B801', 0.03],
  ['#A30000', 0.03],
]}
>
{({ remainingTime }) => remainingTime}
</CountdownCircleTimer>
{setTimeout(function () { window.open("https://www.dhruvaspace.com/","_self");}, 3000)}
</h1>
)}
export default CountGraphic
