import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import "./Approach.css";

function Approach() {

  const jsCode1 = `
  for (let i = 1; i <= 100; i++) {
      if (i % 5 === 0 && i % 3 === 0) {
          console.log("Fizz Buzz");
      } else if (i % 3 === 0) {
          console.log("Fizz");
      } else if (i % 5 === 0) {
          console.log("Buzz");
      } else {
          console.log(i);
      }
  }`

  const jsCode2 = `
  let arr = ['1', '2', '3', '4', '5', '6']; 

  console.log(arr[0]);    <br></br>
  console.log(arr[1]);    <br></br>
  console.log(arr[2]);    <br></br>
  console.log(arr[3]);    <br></br>
  console.log(arr[4]);    <br></br>
  console.log(arr[5]);    <br></br>
  console.log(arr[6]);    <br></br>

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 5 === 0 && arr[i] % 3 === 0) {
        console.log("Fizz Buzz");
    }
    else if (arr[i] % 3 === 0) {
        console.log("Fizz");
    }
    else if (arr[i] % 5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(arr[i]);
    }
  }
`

  const jsCode3 = `

  for (let i = 1; i <= 100; i++) {

    let output ="";

    if (i % 3 == 0) { output += "Fizz"; }
    if (i % 5 == 0) { output += "Buzz"; }

    if (output == "") { output = i; }

    console.log(output);
`

  return (
    <div>
      <h1 className='page-title'>Approach to Fizz Buzz</h1>
      <br></br>

<div className="containers">
  <h3>for numbers 1 to 100 run them through fizzbuzz</h3>
      <section className="section">
        
        <div>

          {/* <pre>
            <code>{jsCode1}</code>
        </pre> */}




          <SyntaxHighlighter language="javascript" style={docco}>
            {jsCode1}
          </SyntaxHighlighter>

        </div>
      </section>

<section className="section-approach">

<h4>Approach</h4>
        <p>
1. Select a range to iterate through to create a 'For loop' <br></br>
2. Where variable i equals n, increase by 1, untill i is less than n,  <br></br>
3. First look for the two numbers which are modulas together and euqal 0, which is your 'FizzBuzz' <br></br>
4. 'If' i is modular by 5 and equals 0 and i is modular by 3 and equals 0 = FizzBuzz <br></br>
5. We can print this to the console with console.log (""); <br></br>
6. Now add in your 'else if' for each number<br></br>
7. 'Else if' i is modular by 5 and equals 0 = run code to print Buzz<br></br>
8. 'Else if' i is modular by 3 and equals 0 = run code to print Fizz<br></br>
9. Now look at the 'Else' where the value is not modulas by the numbers asked for<br></br>
10. 'Else' log each iterate of the number<br></br>
        </p>

</section>

</div>


      <br></br>

      <div className="containers">
            <h3>create an array of numbers and loop through array fizzbuzz</h3>
      <section className="section">
    
        <div>



          {/* <pre>
            <code>{jsCode2}</code>
        </pre> */}

          <SyntaxHighlighter language="javascript" style={docco}>
            {jsCode2}
          </SyntaxHighlighter>

        </div>
      </section>

      <section className="section-approach">
  <h4>Approach</h4>
<p>
1. Create an array to iterate through with a 'For loop<br></br>
2. Where i equals n, increase by 1, untill i is less than the array length, <br></br>
3. First look for the two numbers which are modulas together and euqal 0, which is your 'FizzBuzz' <br></br>
4. 'If' array i is modular by 5 and equals 0 and array i is modular by 3 and equals 0 = FizzBuzz <br></br>
5. Now add in your 'else if' for each number<br></br>
6. 'Else if' array i is modular by 5 and equals 0 = Buzz<br></br>
7. 'Else if' array i is modular by 3 and equals 0 = Fizz<br></br>
8. Now look at the 'Else' where the value is not modulas by the numbers asked for<br></br>
9. 'Else' log each array iterate of the number at each point in the array<br></br>

</p>
</section>

</div>

      <br></br>
      
      <div className="containers">     
      <h3>A simpler solution</h3>
      <section className="section">
   
        <div>

          {/* <pre>
            <code>{jsCode3}</code>
        </pre> */}

          <SyntaxHighlighter language="javascript" style={docco}>
            {jsCode3}
          </SyntaxHighlighter>

        </div>
      </section>

      <section className="section-approach">
      <h4>Approach</h4>
<p>
1. Select a range to iterate through to create a 'For loop' <br></br>
2. Where variable i equals n, increase by 1, untill i is less than n,<br></br>
3. Set a variable output which is an empty string (blank text)<br></br>
4. Each line is an 'IF' <br></br>
5. 'if' i is modular by 3 and equals 0 = output eqauls Fizz (add Fizz to the line of text)<br></br>
6. 'if' i is modular by 5 and equals 0 = output eqauls Buzz (add Buzz to the line of text)<br></br>
7. Now test the string of text under output <br></br>
8. 'if' each iterate output its empty (non of the tests were true) = output equals the iterative number<br></br>
9. Now you print the output<br></br>
10. console.log(output)<br></br>

</p>

</section>
</div>

<br></br>



    </div>
  )
}

export default Approach
