import {createSlice} from "@reduxjs/toolkit";
import {createPhone, deletePhone, listPhones, updatePhone} from "./PhoneAxios";

const intialize = {
    phones: []
}

const phoneSlice = createSlice({
    name: 'phones',
    initialState: intialize,
    reducers: {},
    extraReducers: (builder) =>{
        builder
            .addCase(listPhones.fulfilled,(state ,action) => {
                state.phones = action.payload;
            })
            .addCase(createPhone.fulfilled,(state, action) => {
                state.phones.push(action.payload);
            })
            .addCase(updatePhone.fulfilled,(state, action) => {
                const index = state.phones.findIndex(phone => phone.id === action.payload.id);
                state.phones[index] = action.payload;
            })
            .addCase(deletePhone.fulfilled, (state, action) => {
                console.log(action.payload.id)
                state.phones = state.phones.filter(phone => phone.id!== action.payload.id);
            })
    }
})

export default phoneSlice.reducer;