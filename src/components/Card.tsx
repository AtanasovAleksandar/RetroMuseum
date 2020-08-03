import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";

import { InfoSection } from "../components/InfoSection";

interface Context {
  cars: Cars[];
}

interface Cars {
  id: number;
  model: string;
  description: string;
  manufactureYear: number;
  horsePower: number;
  cubics: number;
  imgUrl: string;
  color: string;
}

export const Card: React.FC = () => {
  const context: any = useContext(GlobalContext);
  const { selectCar, reset } = useContext(GlobalContext);
  const [selectedCar, setSelectedCar] = useState(false);
  const [cars , setCars ] = useState([])
  useEffect(() => {
    setCars(context.cars)
  }, [])

  console.log(context);

  return (
    <div className="container">
      <div className="cars-container">
        {cars.map((car: Cars) => (
          <div
            onClick={() => {
              reset()
              selectCar(car.id)
              setSelectedCar(true)
            }}
            className="card-shape"
            style={{ backgroundColor: `#${car.color}` }}
            key={car.id}
          >
            <span className="card-title">{car.model}</span>
            <img className="cars" src={car.imgUrl} alt="car" />
          </div>
        ))}
      </div>
      {/* {selectedCar ? ( */}
        <div className="description-container">
          {context.cars.length > 0 ? <InfoSection context={context.cars[0]} /> : <InfoSection context={context.cars} />}
        </div>
      {/* ) : null} */}
    </div>
  );
};
