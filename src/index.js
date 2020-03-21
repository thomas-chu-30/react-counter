import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter.js";
//希望是重10開始的init
// 第一招
// ReactDOM.render(<Counter initCount="45" />, document.getElementById("root"));

ReactDOM.render(<Counter />, document.getElementById("root2"));
