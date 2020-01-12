import React from "react";
import ReactDOM from "react-dom";

let value; // define value global scope so that it will not be reinitialized every time the function gets called.

function useState(initialState) {
  if (typeof value === "undefined") value = initialState;

  function setState(nextValue) {
    value = nextValue;
    ReactDOM.render(<MyName />, document.getElementById("root"));
  }

  return [value, setState];
}

function MyName() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState(""); // problem: writing to the same global value variable

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLastName(evt) {
    setLastName(evt.target.value);
  }

  return (
    <div>
      <h1>
        My name is: {name} {lastName}
      </h1>
      <input type="text" value={name} onChange={handleName} />
      <input type="text" value={lastName} onChange={handleLastName} />
    </div>
  );
}

export default MyName;
