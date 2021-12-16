import React, { useState } from "react";
import './App.css';
import api from './services/api';
import { Button, Container, Input, Main, Ul } from './styled/Stylestart'


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

    <Main>
      <Container>     

        <h1>Welcome to Chuck Norris' jokes page</h1>

        <p>
          Inform the number of jokes you want:
        </p>

          <Input type='number' name="quantidade de piadas" onChange={numberJoke} placeholder="Number Jokes"/>

        <Button onClick={jokes}>Enviar</Button>

        <Ul>
            {joke.map((item,index)=>(<li key={index}>{JSON.stringify(item.joke).replace(/[`&<;>""]/g, '')}</li>))}
        </Ul>

      </Container>
      </Main>

    
  );
}

export default App;