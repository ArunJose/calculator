import React from "react";
import "./styles.css";

export default function App() {
  const handleButton = (e) => {
    console.log(e.target.innerText);
  };
  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="container">
        <input type="text" id="display" />
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
