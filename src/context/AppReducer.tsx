export default (state: any, action: any) => {
    switch(action.type) {
        case 'SELECT_CAR': 
            return {
               ...state,
               cars: state.cars.filter(car => car.id === action.payload) 
            }
        case 'ADD_OWNER':
            return {
                ...state,
                owners: action.payload.owners.unshift(action.payload.owner)
            }
        case 'RESET': 
            return action.payload
        default: 
            return state
    }
} 