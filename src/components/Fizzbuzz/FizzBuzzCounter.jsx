import { React, useState } from "react";


function FizzBuzzCounter() {
    const [countfizz, setCountfizz] = useState(3);
    const [countbuzz, setCountbuzz] = useState(5);


  return (
    <div>
<section>
<h2> Fizz</h2>
      <input type="number" id="fizz" readOnly value ={countfizz}/>
        <br />
 <button onClick={() => {setCountfizz(countfizz - 1);}}>-1</button>
 <button onClick={() => {setCountfizz(3);}}>Reset</button>
 <button onClick={() => {setCountfizz(countfizz + 1);}}>+1</button>
</section>

<section>
<h2> Buzz</h2>
      <input type="number"  id="buzz" readOnly value ={countbuzz}/>
        <br />
 <button onClick={() => {setCountbuzz(countbuzz - 1);}}>-1</button>
 <button onClick={() => {setCountbuzz(5);}}>Reset</button>
 <button onClick={() => {setCountbuzz(countbuzz + 1);}}>+1</button>
</section>

    </div>
  )
}

export default FizzBuzzCounter;