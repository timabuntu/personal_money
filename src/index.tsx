import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { createServer } from "miragejs";

createServer({
  routes() {
    this.namespace = "api";

    this.get("/transactions", () => {
      return [
        {
          id: 1,
          title: "Pizza",
          amount: 70,
          type: "withdraw",
          category: "Gordice",
          createdAt: new Date(),
        },
      ];
    });
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
