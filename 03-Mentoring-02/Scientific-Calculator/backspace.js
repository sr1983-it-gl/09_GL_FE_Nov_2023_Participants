function handleBackspace(){

  // 456
  // get the io-panel text

  const text = "ABCDEF";
  console.log(text);

  if (text.length != 0){

    // 123 -> // 12

    const newText = text.substring(0, text.length - 1)
    console.log("Text in IOPanel")

    console.log(newText)

  }else{

    console.log("No text in IOPanel")
  }

}

function add(a, b){

  return a+b;
}

handleBackspace();

a = 10;
b = 20;

c = add(a, b);
console.log(`${a} + ${b} is ${c}`);
