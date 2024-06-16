// value - (, ), 0, 4, 8, etc..
function updateContentToIOPanel(value){

  const newText = value

  // get the reference io-panel
  const ioPanel = document.getElementById("ioPanel");

  // 12
  // 1
  // get the existing text from io-panel
  const existingText = getIOPanelText()

  // 12 + 3 [123]
  // 12
  const finalText = existingText + newText
  // const finalText =  newText + existingText;

  // update the inner-text
  ioPanel.innerText = finalText
}

function getIOPanelText(){

  // get the reference io-panel
  const ioPanel = document.getElementById("ioPanel");

  // get the existing text from io-panel
  const innerText = ioPanel.innerText

  return innerText;
}

function setIOPanelText(text){

  // get the reference io-panel
  const ioPanel = document.getElementById("ioPanel");

  // set the new text to io-panel
  ioPanel.innerText = text
}

function handleClearButton(){

  // get a reference to io-panel
  const ioPanel = document.getElementById("ioPanel");

  // clear the text
  ioPanel.innerText = ""

}


function handleBackspace(){

  // 456
  // get the io-panel text

  const text = getIOPanelText();

  if (text.length != 0){

    // 123 -> // 12

    const newText = text.substring(0, text.length - 1)
    console.log("Text in IOPanel")

    ioPanel.innerText = newText

  }else{

    console.log("No text in IOPanel")
  }

}


function handleNegationOperator(){

  // -10 -> +10
  // +5 / 5 -> -5

  const text = getIOPanelText()

  // -5
  let aNumber = parseFloat(text, 10)

  aNumber = aNumber * -1
  // aNumber = -aNumber;

  setIOPanelText(aNumber)
}

function handleEnter(){

  const text = getIOPanelText()

  if (text == ""){
    console.log("Expression is empty")
  }else{

    const ioPanel = document.getElementById("ioPanel");

    try{
      const outcome = eval(text)
      ioPanel.innerText = text + "->" + outcome;
    }catch (error) {
      console.log(error);
      ioPanel.innerText = "Invalid Expression [" + text + "]";
    }

  }
}

function handleSquareRoot(){

  const aNumber = getIOPanelText()

  const outcome = Math.sqrt(aNumber)
  setIOPanelText(outcome)
}

function handleSquare(){

  const aNumber = getIOPanelText()
  const outcome = (aNumber * aNumber);

  setIOPanelText(outcome);

}

function handleExponent(){

  const aNumber = getIOPanelText()

  const outcome = Math.exp(aNumber);
  setIOPanelText(outcome);

}

function handleSIN(){

  // 45 
  // 45 degree
  const aNumber = getIOPanelText()

  const radians = convertDegreesToRadians(aNumber);

  // sin (radians)
  const outcome = Math.sin(radians);
  setIOPanelText(outcome);

}

function handleCOS(){

  // 45 
  // 45 degree
  const aNumber = getIOPanelText()

  const radians = convertDegreesToRadians(aNumber);

  // cos (radians)
  const outcome = Math.cos(radians);
  setIOPanelText(outcome);

}


function handleTAN(){

  // 45 
  // 45 degree
  const aNumber = getIOPanelText()

  const radians = convertDegreesToRadians(aNumber);

  // cos (radians)
  const outcome = Math.tan(radians);
  setIOPanelText(outcome);

}

function handleLog(){

  const aNumber = getIOPanelText()

  const outcome = Math.log(aNumber);

  // ` | ~
  const text = `LOG (${aNumber}) -> ${outcome}`;
  setIOPanelText(text);

}

function convertDegreesToRadians(degree){

  const radians = (degree * Math.PI) / 180
  return radians;
}