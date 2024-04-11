import React from 'react'

function About() {
  return (
    <div>
      <h1 className='page-title'>About Fizz Buzz</h1>
      <br></br>
<p>FizzBuzz originated as a word game played by children and students to help them learn division and multiplication concepts. </p>
<p>In this game, players sit in a group and count from the number one upwards, each taking a turn to say the next number in sequence. </p>
<p>If the number is a multiple of three, the player speaking says “fizz,” </p>
<p>if the number is a multiple of five, they say “buzz,” </p>
<p>and if the number is a multiple of both three and five, they say “fizz-buzz.” </p>
<br></br>
<p>For example, a typical round of fizz buzz would start as follows:</p>
<p>1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz Buzz, 16, 17, Fizz, 19, Buzz, Fizz, 22, 23, Fizz, Buzz, 26, Fizz, 28, 29, Fizz Buzz, 31, 32, Fizz, 34, Buzz, Fizz, ...</p>

<br></br>
<p>FizzBuzz as a job interview question was created by Imran Ghory in 2007,</p>
<p>as he outlined in a blog post how the game's idea could be used to identify developers who struggle to code even “with tiny problems.” </p>
<p>On the FizzBuzz WikiWikiWeb page attached on Ghory's website, </p>
<p>it states that the FizzBuzz test is intended to “help filter out the 99.5 percent of programming job candidates who can't seem to program their way out of a wet paper bag.”</p>
<p>Since its creation, FizzBuzz has been used as a standard coding interview question to gauge how quickly and effectively candidates can solve common coding problems, if at all.</p>
<br></br>
      <p>a common coding task given during interviews that tasks candidates to write a solution that prints integers one-to-N</p>
      <p>labeling any integers divisible by three as “Fizz,” integers divisible by five as “Buzz” and integers divisible by both three and five as “FizzBuzz.”</p>
      <p>Understanding how to solve it can help reinforce good coding practices.</p>      
<br></br>
<p>The most obvious way to solve FizzBuzz is to loop through a set of integers. </p>
<p>In this loop, we use conditional statements to check whether each integer is divisible by three and/or five.</p>
<p>First, we store integers one-to-50 in the vairable. An empty vairable named output is also defined to store the results of the procedure. </p>
<p>Then, we check whether each integer in vairable is evenly divisible by three and/or five using conditional statements within a for loop.</p>
  <p>These statements use the modulo operator %%, which returns the remainder of a division operation.</p>
  <p>As an example, the expression if (i %% 3 == 0)means, “If we divide this integer by three, is the remainder zero?”</p>
  <p>When one of the conditional statements returns true, the appropriate response is stored in the ith index of the output vairable.</p>
<p> Once the loop has completed, we print output to display the results of the process.</p>




    </div>
  )
}

export default About
