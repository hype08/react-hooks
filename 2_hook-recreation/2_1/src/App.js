import React from "react";
import ReactDOM from "react-dom";

// global name space to store multiple Hook values
let values = []; // define an array instead, so we can define multiple hooks
let currentHook = 0;

function useState(initialState) {
  if (typeof values[currentHook] === "undefined")
    values[currentHook] = initialState;

  let hookIndex = currentHook;
  function setState(nextValue) {
    values[hookIndex] = nextValue;
    ReactDOM.render(<MyName />, document.getElementById("root"));
  }

  return [values[currentHook++], setState];
}

function MyName() {
  currentHook = 0; // set to 0 at the start of component render
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
