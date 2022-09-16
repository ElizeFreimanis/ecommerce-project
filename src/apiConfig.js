import base64 from "base-64";

const API_KEY = "ck_053be667902942c567f31a064223f87e0ea8587e";
const API_SECRET = "cs_4679f4da07846d35b3237fcd72744a0ca69b3462";

const headers = new Headers();

headers.append("Authorization", "Basic " + base64.encode(API_KEY + ":" + API_SECRET));

export default headers;
