

function addListenersToAllButtons(){

  console.log("addListernersToAllButtons")

  const allButtons 
    = document.getElementsByClassName("button");

  console.log(allButtons);

  const buttonsArray = Array.from(allButtons)

  for (var index = 0; index < buttonsArray.length; index ++){

    const currentButton = buttonsArray[index];

    currentButton.addEventListener("click", handleButton)
  }

}

function handleButton(event){

  console.log("Handle Button -> Called")

  const text = getInnerTextForClickedButton(event)

  if (text == "CLEAR"){

    handleClearButton();
  }else if (text == "BACKSPACE"){

    handleBackspace()
  }else if (text == "="){

    handleEqualsOperator();
  }else{

    updateContentToIOPanel(event)

  }

}

function handleClearButton(){

  // get a reference to io-panel
  const ioPanel = document.getElementById("ioPanel");

  // clear the text
  ioPanel.innerText = ""

}

function updateContentToIOPanel(event){

  // 3
  // 2
  // get the text
  const newText = getInnerTextForClickedButton(event)

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

function handleEqualsOperator(){

  const text = getIOPanelText()

  if (text == ""){
    console.log("Expression is empty")
  }else{

    const ioPanel = document.getElementById("ioPanel");

    try{
      const outcome = eval(text)
      ioPanel.innerText = outcome;
    }catch (error) {
      console.log(error);
      ioPanel.innerText = "Invalid Expression [" + text + "]";
    }

  }
}

function getInnerTextForClickedButton(event){

  // <div class="button">CLEAR</div>
  const eventTarget = event.target;

  // 9, CLEAR, BACKSPACE
  const text = eventTarget.innerText

  return text;
}


function getIOPanelText(){

  // get the reference io-panel
  const ioPanel = document.getElementById("ioPanel");

  // get the existing text from io-panel
  const innerText = ioPanel.innerText

  return innerText;
}

addListenersToAllButtons();