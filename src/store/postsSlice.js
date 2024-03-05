import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/posts')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})

const postsSlice = createSlice({
    name: 'posts',
    initialState: {data: [], isLoading: false, isError: null},
    extraReducers: (builder)=>{
        builder
        .addCase(getPosts.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(getPosts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(getPosts.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
    }
})

export default postsSlice.reducer