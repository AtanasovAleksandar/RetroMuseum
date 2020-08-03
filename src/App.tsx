import React from "react";
import "./App.scss";

import { Header } from "./components/Header";
import { Card } from "./components/Card";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalProvider>
        <Header />
        <Card />
      </GlobalProvider>
    </div>
  );
}

export default App;
