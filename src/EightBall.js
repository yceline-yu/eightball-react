import React, { useState } from "react";
import "./EightBall.css";
import _ from "lodash";

/** EightBall
 * 
 * Props:
 * - answers : [{msg, color},...]
 * 
 * State:
 * - answer: {msg, color}
 * 
 * App -> EightBall
 *  
 */

function EightBall(props){
  const { answers } = props;
  // make set from possible colors so it can handle different colors
  const defaultAnswer = {msg:"Think of a question.", color:"black"};

  const [answer, setAnswer] = useState(defaultAnswer);
  const [redCount, setRedCount] = useState(0);
  const [yellowCount, setYellowCount] = useState(0);
  const [greenCount, setGreenCount] = useState(0);
  

  function handleClick(){
    let randomAnswer = _.sample(answers);
    let updatedRedCount = randomAnswer.color === "red" ? redCount + 1 : redCount;
    let updatedYellowCount = randomAnswer.color === "goldenrod" ? yellowCount + 1 : yellowCount;
    let updatedGreenCount = randomAnswer.color === "green" ? greenCount + 1 : greenCount;
    setRedCount(updatedRedCount);
    setYellowCount(updatedYellowCount);
    setGreenCount(updatedGreenCount);
    setAnswer(randomAnswer);
  };

  function handleReset(){
    setAnswer(defaultAnswer);
    setRedCount(0);
    setYellowCount(0);
    setGreenCount(0);
  };

  //name top level <div> same name as component
  return (
  <div className="EightBall">
    <div className="EightBall-ball" style={{backgroundColor: answer.color}}
    onClick={handleClick}>
      <p className="EightBall-msg">{answer.msg}</p>
    </div>
    <div>
      <p>Red Count: {redCount}</p>
      <p>Yellow Count: {yellowCount}</p>
      <p>Green Count: {greenCount}</p>
    </div>
    <div>
      <button className="EightBall-reset" onClick={handleReset}>Reset</button>
    </div>
  </div>
  );

};

EightBall.defaultProps = {answers:[
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
]};

export default EightBall;