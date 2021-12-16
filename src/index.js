import HelperClass from "./HelperClass.js";
import helperFunction from "./helperFunction.js";
import { anotherFunction } from "./helperFunction.js";
import imageUrl from '../static/test.jpeg?url';
// To load a raw text file, use ?raw instead of ?url

const helper = new HelperClass();
helper.sayHello();

helperFunction();

anotherFunction();

// Example loading static file from JS
async function fetchImage() {
  const request = await fetch(imageUrl);
  const response = await request.blob();
  console.log(response);
}

fetchImage();