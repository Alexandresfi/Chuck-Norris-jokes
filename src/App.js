import React, { useState } from "react";
import './App.css';
import api from './services/api';
import Stylestart from "./styled/Stylestart"

function App() {

  const [number, Setnumber] = useState("")

  const [joke, SetJoke] = useState([{joke:"Be careful not to irritate Mr Chuck Norris"}])

  function numberJoke (event) {
    let n = event.target.value;
    Setnumber(n);
  }

  const fetchJoke = async ()=>{
    const jokes = await  api.get(`http://api.icndb.com/jokes/random/${number}`)
    SetJoke( jokes.data.value);
  }

  function jokes (){
    if(number){
      fetchJoke()   
    }else{
      alert("Enter number of jokes you want to search");
    }
  }

  return (

    <Stylestart>
      <div className="container">     

        <h1>Welcome to Chuck Norris' jokes page</h1>

        <label>
          Inform the number of jokes you want:
          <input type="number" name="quantidade de piadas" onChange={numberJoke} placeholder="number of jokes"/>
        </label>

        <button onClick={jokes}>Enviar</button>

        <ul>
            {joke.map((item,index)=>(<li key={index}>{JSON.stringify(item.joke).replace(/[`&<;>""]/g, '')}</li>))}
        </ul>

      </div>
    </Stylestart>

    
  );
}

export default App;