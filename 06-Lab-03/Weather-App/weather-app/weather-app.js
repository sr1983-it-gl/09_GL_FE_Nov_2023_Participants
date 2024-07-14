
class WeatherApp {

  init(){

    const searchTextfieldElement = document.querySelector(".search-box")

    searchTextfieldElement.addEventListener(
      "keypress", this.handleAPIInvocation)

    // Add keypress listener
    // event-handler implementation
      // Enter key
        // event.key == 'Enter'
  }

  handleAPIInvocation(event){

    if (event.key == "Enter"){

      console.log("Enter key pressed")
    }
  }
}

export {WeatherApp}