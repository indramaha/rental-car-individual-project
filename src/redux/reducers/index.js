import { authReducers } from "./AuthReducers";
import { carReducers } from "./carReducers";
import { regisReducers } from "./regisReducers";

const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    regis: regisReducers,
    login: authReducers,
    car: carReducers,
})

export default rootReducers