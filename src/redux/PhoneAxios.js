import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

const apiURL = 'https://669e03409a1bda368005061a.mockapi.io/phone/phone';

export const listPhones = createAsyncThunk('phone/list', async () => {
    const response = await axios.get(apiURL);
    return response.data;
});

export const createPhone = createAsyncThunk('phone/create', async (phone) => {
    const response = await axios.post(apiURL, phone);
    return response.data;
});

export const updatePhone = createAsyncThunk('phone/edit',async (phone) => {
    const response = await axios.put(`${apiURL}/${phone.id}`, phone);
    return response.data;
})

export const deletePhone = createAsyncThunk('phone/delete', async (phone) =>{
    await axios.delete(`${apiURL}/${phone.id}`);
    return phone;
})