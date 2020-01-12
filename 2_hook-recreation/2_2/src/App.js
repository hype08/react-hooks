// this is an example of what NOT to do on purpose, showing how the order of hooks is important. do NOT follow these practices.

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
  // NOTE inserting a new Hook in between two existing hooks makes this break.

  currentHook = 0; // set to 0 at the start of component render
  const [enableFirstName, setEnableFirstName ] = useState(false)
  const [name, setName] = enableFirstName ? useState("") : ["", () => {}] // if enabled, show first name.
  const [lastName, setLastName] = useState(""); // problem: writing to the same global value variable

  function handleName(evt) {
    setName(evt.target.value);
  }

  function handleLastName(evt) {
    setLastName(evt.target.value);
  }

  function handleEnableChange(evt) {
    setEnableFirstName(!enableFirstName)
  } 

  return (
    <div>
      <h1>
        My name is: {enableFirstName ? name : ""} {lastName}
      </h1>
      <input type="checkbox" value={enableFirstName} onChange={handleEnableChange}/>
      <input type="text" value={name} onChange={handleName} />
      <input type="text" value={lastName} onChange={handleLastName} />
    </div>
  );
}

export default MyName;
