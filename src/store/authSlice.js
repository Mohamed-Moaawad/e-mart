import {createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const insertAuth = createAsyncThunk('anth/insertAuth', 
    async(userData,ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res =  await fetch('http://localhost:4000/users',{
                method: "POST",
                body: JSON.stringify(userData),
                headers:{
                    'Content-type' : 'application/json; charset=utf-8'
                }
            })
            const data = await res.json()
            return data
        }catch(err){
            return rejectWithValue(err.message)
        }
    })

const authSlice = createSlice({
    name: 'auth',
    initialState:{users: [], isLoading: false, isError: null},
    extraReducers: (builder)=>{
        builder
        .addCase(insertAuth.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(insertAuth.fulfilled, (state, action)=>{
            state.isLoading = false
            state.users.push(action.payload)
        })
        .addCase(insertAuth.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
            
        })
    }
})

export default authSlice.reducer