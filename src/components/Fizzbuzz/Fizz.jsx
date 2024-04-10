import { React, useState } from "react";

function Fizz() {
    const [countstart, setCountstart] = useState(1);
    const [countend, setCountend] = useState(100);
    const [countfizz, setCountfizz] = useState(3);
    const [countbuzz, setCountbuzz] = useState(5);
    const [outputfizz, setOutputfizz] = useState("");
    const [outputbuzz, setOutputbuzz] = useState("");
    const [outputfizzbuzz, setOutputfizzbuzz] = useState("");
    const rows = 12; 
    const cols = 12; 

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
  return (
    <div>
      

    </div>
  )
}

export default Fizz
