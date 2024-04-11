import "./FizzBuzz.css";
import { React, useState } from "react";

function FizzBuzz() {
    const [countstart, setCountstart] = useState(1);
    const [countend, setCountend] = useState(100);
    const [countfizz, setCountfizz] = useState(3);
    const [countbuzz, setCountbuzz] = useState(5);
    const [output, setOutput] = useState("");
    const [outputfizz, setOutputfizz] = useState("");
    const [outputbuzz, setOutputbuzz] = useState("");
    const [outputfizzbuzz, setOutputfizzbuzz] = useState("");
    const rows = 12; 
    const cols = 12; 
   
    

// Not Fizz or Buzz
const generate = () => {
    let output =[];
  for (let i = countstart; i <= countend; i++) {
  if (i % countfizz !== 0 &&  i % countbuzz !== 0) 
   // output += i
output.push(i);
}
setOutput(output);
};

let gridOutput = "";
for (let row = 0; row < rows; row++) {
   for (let col = 0; col < cols; col++) {
       const index = row * cols + col;
       if (index < output.length) {
           gridOutput += `${output[index]}\t,\t`; // Use tab for spacing
       } 
   }
}



    //Fizz
    const generateFizz = () => {
            let outputfizz =[];
        for (let i = countstart; i <= countend; i++) {
        if (i % countfizz === 0) 
        //  outputfizz += i
         outputfizz.push(i);
    }
setOutputfizz(outputfizz);
};

let gridOutputFizz = "";
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        if (index < outputfizz.length) {
            gridOutputFizz += `${outputfizz[index]}\t,\t`; // Use tab for spacing
        } 
    }
}

  //Buzz
const generateBuzz = () => {
     let outputbuzz =[];
   for (let i = countstart; i <= countend; i++) {
   if (i % countbuzz === 0) 
    // outputbuzz += i
    outputbuzz.push(i);
}
setOutputbuzz(outputbuzz);
};

let gridOutputBuzz = "";
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        if (index < outputbuzz.length) {
            gridOutputBuzz += `${outputbuzz[index]}\t,\t`; // Use tab for spacing
        }
    }
}

//Fizz Buzz
const generateFizzBuzz = () => {
     let outputfizzbuzz =[];
   for (let i = countstart; i <= countend; i++) {
   if (i % countfizz === 0 &&  i % countbuzz === 0) 
    // outputfizzbuzz += i
outputfizzbuzz.push(i);
}
setOutputfizzbuzz(outputfizzbuzz);
};

let gridOutputFizzBuzz = "";
for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
        const index = row * cols + col;
        if (index < outputfizzbuzz.length) {
            gridOutputFizzBuzz += `${outputfizzbuzz[index]}\t,\t`; // Use tab for spacing
        } 
    }
}



  return (
    <div>

<container>

<section className="array">
<h3> Range Start</h3>
<p>Enter the starting point of your array</p>
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

<section className="array">
<h3> Range End</h3>
<p>Enter the end point of your array</p>
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

</container>

<container>

<section className="fb_selectors">
<h3> Fizz</h3>
<p>Enter your 'Fizz' number</p>
      <input type="number" id="fizz" readOnly value ={countfizz}/>
        <br />
 <button onClick={() => {setCountfizz(countfizz - 1);}}>-1</button>
 <button onClick={() => {setCountfizz(3);}}>Reset</button>
 <button onClick={() => {setCountfizz(countfizz + 1);}}>+1</button>
</section>

<section className="fb_selectors">
<h3> Buzz</h3>
<p>Enter your 'Buzz' number</p>
      <input type="number"  id="buzz" readOnly value ={countbuzz}/>
        <br />
 <button onClick={() => {setCountbuzz(countbuzz - 1);}}>-1</button>
 <button onClick={() => {setCountbuzz(5);}}>Reset</button>
 <button onClick={() => {setCountbuzz(countbuzz + 1);}}>+1</button>
</section>

</container>

<br></br>
<br></br>
<section className="generate_button">
<button onClick={generate}>
    Generate Numbers
</button>
<br></br>
</section>
<br></br>

<section className="generate">
   {gridOutput}
</section>

<br></br>
<br></br>
<section className="generate_button">
<button onClick={generateFizz}>
    Generate Fizz
</button>
<br></br>
</section>
<br></br>

<section className="generate">
   {gridOutputFizz}
</section>


<br></br>
<br></br>
<section className="generate_button">
<button onClick={generateBuzz}>
    Generate Buzz
</button>
<br></br>
</section>
<br></br>

<section className="generate">
   {gridOutputBuzz}
</section>



<br></br>
<br></br>
<section className="generate_button">
<button onClick={generateFizzBuzz}>
    Generate Fizz Buzz
</button>
<br></br>
</section>
<br></br>

<section className="generate">
   {gridOutputFizzBuzz}
</section>

    </div>
  )
};

export default FizzBuzz;