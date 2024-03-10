import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registro from './components/Registro';
import { useState } from 'react';

function App() {
  const [message, setMessage] = useState({
    state: false,
    text: '',
    color: ''
  })

  const setAlert = (newAlert) =>{
    setMessage(newAlert)
  }

  return (
    <>
      <Registro message={message} setAlert={setAlert}/>
    </>
  )
}

export default App
