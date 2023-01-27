const regisStatus = {
    message: "",
}

export const regisReducers = (state = regisStatus, action ) => {
    switch (action.type) {
        case "REGIS_STATUS":
            return {
                ...regisStatus,
                message: action.payload
            }
        default:
            return state;
    }
}