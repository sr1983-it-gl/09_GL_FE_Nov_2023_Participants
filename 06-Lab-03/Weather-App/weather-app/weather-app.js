
import {WeatherAPI} from "./weather-api.js"

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

  async handleAPIInvocation(event){

    if (event.key == "Enter"){

      console.log("Enter key pressed")

      // Text-field
      const eventTarget = event.target;

      const locationSuppliedByUser = eventTarget.value;

      const weatherAPIObj = new WeatherAPI();
      weatherAPIObj.constructURL(locationSuppliedByUser);
    
      const responseJSON = await weatherAPIObj.invokeURL();
      console.log(responseJSON)
    
      // Location
      const locationElement = document.querySelector(".location .city")
      locationElement.innerText 
        = `${responseJSON.name}, ${responseJSON.sys.country}`
      
      // Temperature

      // Temperature Type

      // Min / Max

    }
  }
}

export {WeatherApp}