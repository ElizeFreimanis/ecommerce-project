import base64 from "base-64";

const API_KEY = process.env.REACT_APP_API_KEY;
const API_SECRET = process.env.REACT_APP_API_SECRET;

console.log(API_KEY, API_SECRET);

const headers = new Headers();

headers.append("Authorization", "Basic " + base64.encode(API_KEY + ":" + API_SECRET));

export default headers;
