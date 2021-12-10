import { createStore } from "redux";
import rootReducer from "./todo";

const store = createStore(rootReducer)

export default store