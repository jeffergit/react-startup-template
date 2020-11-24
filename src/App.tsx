import React from "react";
import Routing from "./Routing";
import "./style/main.scss";

/**axios default config */
import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_HTTP;
// axios.defaults.headers.common["Authorization"] = "";
// axios.defaults.headers.post["Content-Type"] =
//   "application/x-www-form-urlencoded";

function App() {
  return (
    <div className="App">
      <Routing />
    </div>
  );
}

export default App;
