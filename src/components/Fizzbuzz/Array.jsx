import { React, useState } from "react";

function Array() {
    const [countstart, setCountstart] = useState(1);
    const [countend, setCountend] = useState(100);

  return (
    <div>
      <section>
<h2> Array Start</h2>
      <input type="number" id="arrays" readOnly value ={countstart}/>
        <br />
 <button onClick={() => {setCountstart(countstart - 10);}}>-10</button>
 <button onClick={() => {setCountstart(countstart - 5);}}>-5</button>
 <button onClick={() => {setCountstart(countstart - 1);}}>-1</button>
 <button onClick={() => {setCountstart(1);}}>Reset</button>
 <button onClick={() => {setCountstart(countstart + 1);}}>+1</button>
 <button onClick={() => {setCountstart(countstart + 5);}}>+5</button>
 <button onClick={() => {setCountstart(countstart + 10);}}>+10</button>
</section>

<section>
<h2> Array End</h2>
      <input type="number" id="arraye" readOnly value ={countend}/>
        <br />
        <button onClick={() => {setCountend(countend - 10);}}>-10</button>  
 <button onClick={() => {setCountend(countend - 5);}}>-5</button>  
 <button onClick={() => {setCountend(countend - 1);}}>-1</button>
 <button onClick={() => {setCountend(100);}}>Reset</button>
 <button onClick={() => {setCountend(countend + 1);}}>+1</button>
 <button onClick={() => {setCountend(countend + 5);}}>+5</button>
 <button onClick={() => {setCountend(countend + 10);}}>+10</button>
</section>

    </div>
  )
}

export default Array;