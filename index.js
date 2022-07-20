import axios from "axios";
import express from "express";

// I now have an express app/server that can receive http(s) requests and send back http(s) responses
// This app/server is deaf
const app = express();

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port:${PORT}`);
});

const URL = "https://api.kanye.rest/";

// GET /kanye_quotes
// localhost:3000/kanye_quotes
// <SERVERNAME>.<METHODNAME>(<PATHNAME>, <CALLBACK FUNCTION>)
// Element.addEventListener("click", (evtObj) => {

// })
app.get("/kanye_quotes", async (req, res) => {
  try {
    const response = await axios.get(URL);
    res.send(response.data);
  } catch (error) {
    console.log(error);
  }

  // axios
  // .get(URL)
  // .then((response) => {
  //   res.send(response.data);
  // })
  // .catch((err) => console.log(err));
});
