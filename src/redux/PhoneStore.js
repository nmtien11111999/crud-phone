import {configureStore} from "@reduxjs/toolkit";
import phoneReducer from "./PhoneSlice";

const PhoneStore = configureStore({
    reducer: {
        phones: phoneReducer
    }
})

export default PhoneStore;