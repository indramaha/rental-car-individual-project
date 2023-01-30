const carState = {
    carList : [],
    carById: {},
    filterBtn: false,
}

export const carReducers = (state = carState, action) => {
    switch (action.type) {
        case "GET_ALL_CARS":
            return {
                ...carState,
                carList: action.payload,
            }
        case "GET_CAR_BY_FILTER":
            return {
                ...carState,
                carList: action.payload.carList,
                filterBtn: action.payload.filterBtn,
            }
        case "GET_CAR_BY_ID":
            return {
                ...carState,
                carById: action.payload,
            }
        default:
            return state;
    }
}