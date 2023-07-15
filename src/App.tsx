import { useEffect, useState } from "react";
import "./assets/styles/main.scss";
import Footer from "./components/Footer";

const App = () => {
  const [codeMatrix, setCodeMatrix] = useState("");

  //drawing the characters
  const createMatrix = (
    c: any,
    ctx: any,
    codeMatrix: string | string[],
    font_size: number,
    drops: Array<any>
  ) => {
    //translucent BG to show trail
    ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
    ctx.fillRect(0, 0, c.width, c.height);

    ctx.fillStyle = "#0F0"; //green text
    ctx.font = font_size + "px arial";
    //looping over drops
    for (let i = 0; i < drops.length; i++) {
      //a random chinese character to print
      let text = codeMatrix[Math.floor(Math.random() * codeMatrix.length)];
      // making sure we're getting a valid codeMatrix[index] before printing it out
      if (text !== undefined) {
        ctx.fillText(text, i * font_size, drops[i] * font_size);
      }

      //sending the drop back to the top randomly after it has crossed the screen
      //adding a randomness to the reset to make the drops scattered on the Y axis
      if (drops[i] * font_size > c.height && Math.random() > 0.975) {
        drops[i] = 0;
      }
      //incrementing Y coordinate
      drops[i]++;
    }
  };

  const inputController = (e: any) => {
    let terminalInput: any = document.querySelector("textarea");

    // getting new text
    let newText: string = e.target.value;
    terminalInput.value = `${newText}`;
    setCodeMatrix(newText);

    startMatrix();
  };

  const startMatrix = () => {
    // matrix elements
    let c: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
    let ctx: any = c.getContext("2d");

    //making the canvas full screen
    c.height = window.innerHeight;
    c.width = window.innerWidth;

    //converting the string into an array of single characters
    let lcodeMatrix: string | string[];

    // verify if text is available to print.
    if (codeMatrix.length > 0) {
      lcodeMatrix = codeMatrix;
    } else {
      const tempCodeMatrix =
        "01110111-01100101/01100010*01110011!01101001$01110100%01100101&00100000(01101001)01101110=01110011?01110000>01101001º01110010+01100101]01100100¿00100000.01100010;01111001,00100000¬01110100<01101000≤01100101|00100000?01101101)01100001)01110100(01110010/01101001&01111000%00100000·01110100!01110010!01101001*0110110001101111-01100111$01111001";
      setCodeMatrix(tempCodeMatrix);
    }
    lcodeMatrix = codeMatrix.split("");

    let font_size = 15;
    let columns = c.width / font_size; //number of columns for the rain
    //an array of drops - one per column
    let drops: Array<any> = [];
    //x below is the x coordinate
    //1 = y co-ordinate of the drop(same for every drop initially)
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    setInterval(() => {
      createMatrix(c, ctx, lcodeMatrix, font_size, drops);
    }, 80);
  };

  const clearTerminal = () => {
    setCodeMatrix(" ");
    startMatrix();
  };

  useEffect(() => {
    startMatrix();
  });

  return (
    <div className="App">
      <header className="App-header">
        <canvas id="matrix"></canvas>
        <div id="terminalWindow">
          <div id="terminalWindowHeader">
            <span onClick={() => clearTerminal()}>
              <i className="fas fa-times-circle"></i>{" "}
            </span>
            <i className="fas fa-minus-circle"></i>{" "}
            <i className="fas fa-plus-circle"></i> Terminal
          </div>
          <textarea
            onChange={inputController}
            name="terminal-input"
            id="terminal-input"
            cols={1}
            rows={10}
            maxLength={40}
            placeholder="~/ $ Type your text here"
          ></textarea>
        </div>
      </header>
      <Footer />
    </div>
  );
};

export default App;
