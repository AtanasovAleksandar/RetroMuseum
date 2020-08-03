export default (state: any, action: any) => {
    switch(action.type) {
        case 'SELECT_CAR': 
            return {
               ...state,
               cars: state.cars.filter(car => car.id === action.payload) 
            // cars: state.cars[action.payload]
            }
        // case 'FIND_OWNER':
        //     return {
        //         ...state,
        //         cars: state.cars.filter(car => car.id === action.payload)
        //     }
        case 'RESET': 
            return action.payload
        default: 
            return state
    }
} 