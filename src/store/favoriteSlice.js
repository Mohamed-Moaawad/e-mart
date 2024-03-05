import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 


export const addProductToFavorite = createAsyncThunk('favoriteSlice/addProductToFavorite', 
    async(product, ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res = await fetch('http://localhost:4000/favorite', {
                method: "POST",
                body: JSON.stringify(product),
                headers: { 'Content-type' : 'application/json; charset=utf-8' },
            })
            const data = await res.json()
            return data
        }catch (err){
            return rejectWithValue(err.message)
        }
    }
)

export const deleteFromFavorite = createAsyncThunk('favoriteSlice/deleteFromFavorite', 
    async(item,ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            await fetch(`http://localhost:4000/favorite/${item}`,{
                method: 'DELETE',
                headers:{
                    'Content-type' : 'application/json; charset=utf-8'
                }
            })
            return item
        }catch(err){
            rejectWithValue(err.message)
        }
})


const favoriteSlice = createSlice({
    name: 'favoriteSlice',
    initialState: {data: [], isLoading: false, isError: null },
    reducers: null,
    extraReducers: (builder)=>{
        builder
        // add
        .addCase(addProductToFavorite.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(addProductToFavorite.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data.push(action.payload)
        })
        .addCase(addProductToFavorite.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })

        // delete
        .addCase(deleteFromFavorite.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(deleteFromFavorite.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = state.data.filter((ele)=> ele.id !== action.payload)
        })
        .addCase(deleteFromFavorite.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
    }
})

export default favoriteSlice.reducer















// import { createSlice } from "@reduxjs/toolkit";

// const favoriteSlice = createSlice({
//     name: 'favoriteSlice',
//     initialState: {data:[]},
//     reducers:{
//         addToFavorite:(state, action)=>{
//             const findFavorite = state.data.find((item)=> item.id === action.payload.id)
//             if(findFavorite){
//                 findFavorite.favorite = 1
//             }else{
//                 const productClone = {...action.payload}
//                 state.data.push(productClone)
//             }
//         },
//         deleteFromFavorite:(state, action)=>{
//             state.data.filter((item)=> item.id !== action.payload.id)
//         }
//     }
// })

// export const { addToFavorite, deleteFromFavorite } = favoriteSlice.actions
// export default favoriteSlice.reducer

