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

      <section className="section">
        <h3>for numbers 1 to 100 run them through fizzbuzz</h3>
        <p>

          {/* <pre>
            <code>{jsCode1}</code>
        </pre> */}




          <SyntaxHighlighter language="javascript" style={docco}>
            {jsCode1}
          </SyntaxHighlighter>

        </p>
      </section>

      <br></br>
      <section className="section">
        <h3>create an array of numbers and loop through array fizzbuzz</h3>
        <p>



          {/* <pre>
            <code>{jsCode2}</code>
        </pre> */}

          <SyntaxHighlighter language="javascript" style={docco}>
            {jsCode2}
          </SyntaxHighlighter>

        </p>
      </section>

      <br></br>
      <section className="section">
        <h3>A simpler solution</h3>
        <p>

          {/* <pre>
            <code>{jsCode3}</code>
        </pre> */}

          <SyntaxHighlighter language="javascript" style={docco}>
            {jsCode3}
          </SyntaxHighlighter>

        </p>
      </section>

    </div>
  )
}

export default Approach
