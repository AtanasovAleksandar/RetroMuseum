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
      presentationUrl: 'https://cdn.pixabay.com/photo/2017/08/20/13/29/isolated-2661718_960_720.png',
      owners: [
        {
          id: 0,
          name: 'Sue' ,
          year: '1996',
          country: 'Macedonia'
        },
        {
          id: 1,
          name: 'Barb' ,
          year: '1992',
          country: 'USA'
        },
        {
          id: 2,
          name: 'Aorc' ,
          year: '1992',
          country: 'USA'
        },
        {
          id: 3,
          name: 'Dord' ,
          year: '1992',
          country: 'USA'
        }
      ]
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
      presentationUrl: 'https://www.wedding-car.co.uk/images/cars/vintage-citroen-dorothy/main-image/dorothy.png',
      owners: [
        {
          id: 0,
          name: 'Jim' ,
          year: '1996',
          country: 'Macedonia'
        },
        {
          id: 1,
          name: 'Sue' ,
          year: '1992',
          country: 'USA'
        }
      ]
    },
    {
      id: 3,
      model: "Porsche 911",
       imgUrl: "https://cdn.pixabay.com/photo/2017/03/11/14/54/buick-2135196_960_720.png",
      description: "The Porsche 911 represents vintage driving at its best—particularly during the golden era before the car's 1974 redesign.",
      manufactureYear: 1962,
      horsePower: 113,
      cubics: 1900,
      color: 'B8D9F7',
      presentationUrl: 'https://i.ibb.co/RPpr9y6/6-65223-classic-cars-png-vintage-car-png.png',
      owners: [
        {
          id: 0,
          name: 'Max' ,
          year: '1996',
          country: 'Macedonia'
        },
        {
          id: 1,
          name: 'Sam' ,
          year: '1992',
          country: 'USA'
        }
      ]
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
      presentationUrl: 'https://i.ibb.co/xmHWGrq/138-1387745-style-classic-vintage-retro-cars-car-clipart-vintage.png',
      owners: [
        {
          id: 0,
          name: 'Ace' ,
          year: '1996',
          country: 'Macedonia'
        },
        {
          id: 1,
          name: 'David' ,
          year: '1992',
          country: 'USA'
        }
      ]
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

  const addOwner: any = (owner, owners) => {
    dispatch({
      type: "ADD_OWNER",
    payload: {owners, owner}
    })
  }

  const reset: any = () => {
      dispatch({
          type: 'RESET',
          payload: initialState
      })
  }

  // const findOwner = (input) => {
  //   dispatch({
  //     type: 'FIND_OWNER',
  //     payload: input
  //   })
  // }

  return (
    <GlobalContext.Provider
      value={{
        cars: state.cars,
        selectCar,
        addOwner,
        reset,
        // findOwner
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
