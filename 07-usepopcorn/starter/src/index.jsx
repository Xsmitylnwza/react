import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "KY", "KUY"]}
      defaultRating={3}
    />
    <StarRating maxRating={10} color="red" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
