import React, { useState } from "react";

type InputChangeEvent = React.ChangeEvent<HTMLInputElement>;

const App = () => {

  const [name, setName] = useState('');
  const[sobrenome, setSobreNome] = useState('');
  const[idade, setIdade] = useState('');

  const handleInput1 = (event: InputChangeEvent) => {
    setName(event.target.value);
  }

  const handleInput2 = (event: InputChangeEvent) => {
    setSobreNome(event.target.value);
  }

  const handleInput3 = (event: InputChangeEvent) => {
    setIdade(event.target.value);
  }

  return (
    <div>
      <div>
        Nome:
        <input type="text" value={name} onChange={handleInput1} />
      </div>

      <div>
        Sobrenome:
        <input type="text" value={sobrenome} onChange={handleInput2} />
      </div>

      <div>
        Idade:
        <input type="text" value={idade} onChange={handleInput3} />
      </div>

      <hr/>

      Olá {name} {sobrenome}, tudo bem?<br/>
      Você tem {idade} anos.
    </div>
  );
}

export default App;