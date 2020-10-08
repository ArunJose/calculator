import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [numberInMemory, setNumberInMemory] = useState(undefined);
  const [operation, setOperation] = useState(undefined);
  const [wasLastButtonOperator, setWasLastButtonOperator] = useState(false);
  const [lastOperation, setLastOperation] = useState(undefined);
  const handleButton = (e) => {
    console.log(e.target.innerText);
    const buttonText = e.target.innerText;
    if (!isNaN(Number(buttonText))) {
      if (wasLastButtonOperator) {
        setNumberInMemory(currentNumber);
        setCurrentNumber(buttonText);
      } else {
        setCurrentNumber((prevNumber) => {
          if (Number(prevNumber) === 0 && buttonText === "0") {
            return prevNumber;
          } else if (prevNumber === "0") {
            return buttonText;
          } else {
            return `${prevNumber}${buttonText}`;
          }
        });
      }
      setWasLastButtonOperator(false);
    } else if (buttonText === "C") {
      setCurrentNumber("0");
      setNumberInMemory(undefined);
      setOperation(undefined);
    } else if (buttonText === ".") {
      if (currentNumber === "0") {
        setCurrentNumber("0.");
      } else if (!currentNumber.includes(".")) {
        setCurrentNumber((prevNumber) => `${prevNumber}${buttonText}`);
      }
    } else {
      if (operation === "+") {
        setCurrentNumber(
          (prevCurNum) => Number(prevCurNum) + Number(numberInMemory)
        );
      } else if (operation === "-") {
        setCurrentNumber(
          (prevCurNum) => Number(numberInMemory) - Number(prevCurNum)
        );
      } else if (operation === "/") {
        setCurrentNumber(
          (prevCurNum) => Number(numberInMemory) / Number(prevCurNum)
        );
      } else if (operation === "x") {
        setCurrentNumber(
          (prevCurNum) => Number(prevCurNum) * Number(numberInMemory)
        );
      }

      setWasLastButtonOperator(true);
      setNumberInMemory(currentNumber);
      setLastOperation(operation);
      setOperation(buttonText);
      //setCurrentNumber("0");
    }
    console.log("currentNumber", currentNumber);
    console.log("operation", operation);
    console.log("numberinMemory", numberInMemory);
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <div id="display">{currentNumber}</div>
        <table>
          <tbody>
            <tr>
              <td>
                <button id="seven" onClick={handleButton}>
                  7
                </button>
              </td>
              <td>
                <button id="eight" onClick={handleButton}>
                  8
                </button>
              </td>
              <td>
                <button id="nine" onClick={handleButton}>
                  9
                </button>
              </td>
              <td>
                <button id="divide" onClick={handleButton}>
                  /
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="four" onClick={handleButton}>
                  4
                </button>
              </td>
              <td>
                <button id="five" onClick={handleButton}>
                  5
                </button>
              </td>
              <td>
                <button id="six" onClick={handleButton}>
                  6
                </button>
              </td>
              <td>
                <button id="multiply" onClick={handleButton}>
                  x
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="one" onClick={handleButton}>
                  1
                </button>
              </td>
              <td>
                <button id="two" onClick={handleButton}>
                  2
                </button>
              </td>
              <td>
                <button id="three" onClick={handleButton}>
                  3
                </button>
              </td>
              <td>
                <button id="subtract" onClick={handleButton}>
                  -
                </button>
              </td>
            </tr>
            <tr>
              <td>
                <button id="zero" onClick={handleButton}>
                  0
                </button>
              </td>
              <td>
                <button id="decimal" onClick={handleButton}>
                  .
                </button>
              </td>
              <td>
                <button id="clear" onClick={handleButton}>
                  C
                </button>
              </td>
              <td>
                <button id="add" onClick={handleButton}>
                  +
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan="4">
                <button id="equals" onClick={handleButton}>
                  =
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
