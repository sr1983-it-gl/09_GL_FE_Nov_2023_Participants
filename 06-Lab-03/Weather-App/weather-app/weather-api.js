

// Have a constant for baseURL
  // https://api.openweathermap.org/data/2.5/weather



class WeatherAPI {

  constructURL(locationName){

    // Use the base url
    this.url = new URL("")

    this.url.searchParams.append("q", locationName)
    // App-ID
    // Units 

    console.log(this.url.toString())

  }

  invokeURL(){


  }

}