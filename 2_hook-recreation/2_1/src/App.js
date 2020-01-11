import React from "react";
import ReactDOM from "react-dom";

function useState(initialState) {
  let value = initialState;

  function setState(nextValue) {
    value = nextValue;
    ReactDOM.render(<MyName />, document.getElementById("root"));
  }

  return [value, setState];
}

function MyName() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleChange(evt) {
    setName(evt.target.value);
  }

  return (
    <div>
      <h1>
        My name is: {name} {lastName}
      </h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default MyName;
