import './App.css';
import User from './components/User';
import { useState } from "react";
import Alert from './components/Alert';

function App() {
  document.body.style.backgroundColor = "#b8c3b8"
  const [alert, setAlert] = useState(null);


  const showAlert = (message) => {
    setAlert({
      msg: message
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };




  return (
    <div className="App">
      <h6 className="display-4 " >Payment Table</h6>
      <Alert alert={alert} />
      <User showAlert={showAlert} />
    </div>
  );
}

export default App;
