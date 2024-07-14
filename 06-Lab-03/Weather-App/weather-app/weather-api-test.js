
import { WeatherAPI } from "./weather-api.js";

function testConstructURL(){

  const weatherAPIObj = new WeatherAPI();

  weatherAPIObj.constructURL("France");

}

async function testInvokeURL(){

  // const response = await invokeURL();

}

testConstructURL();