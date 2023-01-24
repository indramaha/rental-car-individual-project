import { inputAuthReducers } from "./inputAuthReducers";

const { combineReducers } = require("redux");

const rootReducers = combineReducers({
    inputAuth: inputAuthReducers,
})

export default rootReducers