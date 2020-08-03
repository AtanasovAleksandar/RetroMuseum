import React, { createContext, useReducer } from "react";

import AppReducer from "./AppReducer";

const initialState = {
  cars: [
    {
      id: 1,
      model: "Acura NSX",
      imgUrl: "https://i.ibb.co/9hSf5Lv/Pngtree-big-red-hand-drawn-vintage-4477760.png",
      description: "Acura's halo car from 1990 to 2005, the NSX is young but mighty.",
      manufactureYear: 1962,
      horsePower: 95,
      cubics: 1670,
      color: 'C5ECEE',
      presentationUrl: 'https://cdn.pixabay.com/photo/2017/08/20/13/29/isolated-2661718_960_720.png'
    },
    {
      id: 2,
      model: "BMW 3.0 CSL",
       imgUrl: "https://theshedwarroad.com/images/1957c_chevy_el_morocco_frnt-rt.png",
      description: "When BMW came to America in 1975, it brought a quartet of models with it, including the 3.0 CSL coupe.",
      manufactureYear: 1975,
      horsePower: 100,
      cubics: 1800,
      color: 'FBCCB6 ',
      presentationUrl: 'https://www.wedding-car.co.uk/images/cars/vintage-citroen-dorothy/main-image/dorothy.png'
    },
    {
      id: 3,
      model: "Porsche 911",
       imgUrl: "https://lh3.googleusercontent.com/proxy/MVZKyYdLRn4RcvK5unBOieMtlr4D_5mGAwOrbWba9Iwuh9RoXJM7jKOitwzPfQHKksFRNtSoHcC9K_RglIZo_vwIf9xOFa7LLh74Iu9sTHVJ0o-Lr5K6DWoHrDogGkBrCF3Jpnj4ZfGLHw",
      description: "The Porsche 911 represents vintage driving at its best—particularly during the golden era before the car's 1974 redesign.",
      manufactureYear: 1962,
      horsePower: 113,
      cubics: 1900,
      color: 'B8D9F7',
      presentationUrl: 'https://i.ibb.co/RPpr9y6/6-65223-classic-cars-png-vintage-car-png.png'
    },
    {
      id: 4,
      model: "Ferrari 250",
       imgUrl: "https://i.ibb.co/48ZX3vZ/Pngtree-textured-retro-car-png-illustration-4614072.png",
      description: "Produced from 1975 to 1985, the two-seater V8 Ferrari 308 GTS represented elegance and adventure.",
      manufactureYear: 1975,
      horsePower: 200,
      cubics: 2400,
      color: 'EDE7DF',
      presentationUrl: 'https://i.ibb.co/xmHWGrq/138-1387745-style-classic-vintage-retro-cars-car-clipart-vintage.png'
    },
  ],
};

export const GlobalContext: any = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const selectCar: any = (id: number) => {
    dispatch({
        type: 'SELECT_CAR',
        payload: id
    });
  }

  const reset: any = () => {
      dispatch({
          type: 'RESET',
          payload: initialState
      })
  }

  return (
    <GlobalContext.Provider
      value={{
        cars: state.cars,
        selectCar,
        reset
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
