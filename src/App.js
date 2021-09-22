import "./App.css";
import React, {useState, useMemo} from "react";
// import {myForm, TextField} from '@react-component/my-form';

function App() {

  const [text, setText] = useState()
  const [state, setState] = useState(false);

  function handleChange(e){
   setText(e.target.value)
  }

  const memoizedResult = useMemo(() => {
    let compare = text;

    const validInput = new RegExp('^[0-9]+$');

    if(validInput.test(compare)){
      return true
    }
    else{
      return false
    }
  });

  return (
    <div className="App">
     <div className="control has-icons-right">
        <input
          className="input is-large"
          type="text"
          placeholder="Enter number..."
          onChange={handleChange}

        />
        <span className="icon is-small is-right">
          {memoizedResult ?   <i className="fas fa-check" /> :   <i className="fas fa-times" /> }
        </span> 
      </div>
    </div>
  );
}

export default App;
