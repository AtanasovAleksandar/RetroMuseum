import React from "react";
import "./App.scss";

import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { InfoSection } from "./components/InfoSection";
import { Presentation } from "./components/Presentation";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cars-container">
        <Card
          imgUrl="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/16820/vintage-car-clipart-md.png"
          bgColor="#F7C8B3"
          title="Orange Cope"
        />
        <Card
          imgUrl="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/16820/vintage-car-clipart-md.png"
          bgColor="#C6EDEF"
          title="Blue Cope"
        />
        <Card
          imgUrl="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/16820/vintage-car-clipart-md.png"
          bgColor="#BBDDFA"
          title="Sky Blue Cope"
        />
        <Card
          imgUrl="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/16820/vintage-car-clipart-md.png"
          bgColor="#EDE7DF"
          title="Gray Cope"
        />
      </div>
      <InfoSection
        title="Sport Coupe from USA"
        details="1965-1992, 84kW(122-HP),6 Cylinder, 2000 cm3"
      />
      <Presentation imgUrl="https://cdn.pixabay.com/photo/2017/08/20/13/29/isolated-2661718_960_720.png"/>
    </div>
  );
}

export default App;
