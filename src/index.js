import HelperClass from "./HelperClass.js";
import helperFunction from "./helperFunction.js";
import { anotherFunction } from "./helperFunction.js";

const helper = new HelperClass();
helper.sayHello();

helperFunction();

anotherFunction();

// Example loading static file from JS
async function fetchImage() {
	const request = await fetch('static/test.jpeg');
	const response = await request.blob();
	console.log(response);
}

fetchImage();