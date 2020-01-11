import React from 'react'
import ReactDOM from 'react-dom' 
// to implement the rerendering of component that useState Hook actually does internally

// does not work, because component rerenders every time and resets state whenever the value variable gets reinitialized.

function useState(initialState) {
  let value = initialState

  function setState(nextValue) {
    value = nextValue
    ReactDOM.render(<MyName />, document.getElementById('root'))
  }

  return [value, setState]
}


function MyName() {
  const [name, setName] = useState("");

  function handleChange(e) {
    setName(e.target.value);
  }
  return (
    <div>
      <h1>My name is: {name}</h1>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}

export default MyName;
