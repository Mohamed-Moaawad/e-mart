import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// get All product
export const getProducts = createAsyncThunk('products/getProducts', async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/products')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
// sort A to Z
export const sortAToZ = createAsyncThunk('products/sortAToZ', 
async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/products?_sort=title&_order=asc')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
// sort Z to A
export const sortZToA = createAsyncThunk('products/sortZToA', 
async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/products?_sort=title&_order=desc')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
// sort low to high
export const sortLowToHigh = createAsyncThunk('products/sortLowToHigh', 
async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/products?_sort=price&_order=asc')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
// sort high to low
export const sortHighToLow = createAsyncThunk('products/sortHighToLow', 
async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/products?_sort=price&_order=desc')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})
// search in product
export const searchInProducts = createAsyncThunk('products/searchInProducts', 
    async(resultData,ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res = await fetch(`http://localhost:4000/products?q=${resultData}`)
            const data = await res.json()
            return data
        }catch(err){
            return rejectWithValue(err.message)
        }
    
})
// filter men
export const filterProductsMen = createAsyncThunk("products/filterProductsMen", 
    async(_,ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res = await fetch("http://localhost:4000/products?category=men's clothing")
            const data = await res.json()
            return data
        }catch (err){
            rejectWithValue(err.message)
        }
})
// filter weman
export const filterProductsWeman = createAsyncThunk("products/filterProductsWeman", 
    async(_,ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res = await fetch("http://localhost:4000/products?category=women's clothing")
            const data = await res.json()
            return data
        }catch (err){
            rejectWithValue(err.message)
        }
})
// filter Electronics
export const filterProductsElectronics = createAsyncThunk("products/filterProductsElectronics", 
    async(_,ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res = await fetch("http://localhost:4000/products?category=electronics")
            const data = await res.json()
            return data
        }catch (err){
            rejectWithValue(err.message)
        }
})
//filter products by price
export const filterProductsByPrice = createAsyncThunk('products/sortProductsByPrice', 
    async(allPrice, ThunkAPI)=>{
        const { rejectWithValue } = ThunkAPI
        try{
            const res = await fetch(`http://localhost:4000/products?price_gte=${allPrice.min}&price_lte=${allPrice.max}`)
            const data = await res.json()
            return data
        }catch(err){
            return rejectWithValue(err.message)
        }
})
// get products to home
export const getProductsToHome = createAsyncThunk('products/getProductsToHome', async(_, ThunkAPI)=>{
    const { rejectWithValue } = ThunkAPI
    try{
        const res = await fetch('http://localhost:4000/products?_start=18&_limit=26')
        const data = await res.json()
        return data
    }catch(err){
        return rejectWithValue(err.message)
    }
})



const productSlice = createSlice({
    name: 'products',
    initialState: { data:[], isLoading: false, isError: null },
    extraReducers: (builder)=>{
        builder
        // get All product
        .addCase(getProducts.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(getProducts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(getProducts.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // sort low to high
        .addCase(sortLowToHigh.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(sortLowToHigh.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(sortLowToHigh.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        //sort high to low
        .addCase(sortHighToLow.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(sortHighToLow.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(sortHighToLow.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // sort A to Z
        .addCase(sortAToZ.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(sortAToZ.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(sortAToZ.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        //sort Z to A
        .addCase(sortZToA.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(sortZToA.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(sortZToA.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // get products to home
        .addCase(getProductsToHome.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(getProductsToHome.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(getProductsToHome.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // search in product
        .addCase(searchInProducts.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(searchInProducts.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(searchInProducts.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // filter men
        .addCase(filterProductsMen.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(filterProductsMen.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
            
        })
        .addCase(filterProductsMen.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // filter women
        .addCase(filterProductsWeman.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(filterProductsWeman.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
            
        })
        .addCase(filterProductsWeman.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        // filter Electronics
        .addCase(filterProductsElectronics.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(filterProductsElectronics.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
            
        })
        .addCase(filterProductsElectronics.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        //sort products by price
        .addCase(filterProductsByPrice.pending, (state, action)=>{
            state.isLoading = true
        })
        .addCase(filterProductsByPrice.fulfilled, (state, action)=>{
            state.isLoading = false
            state.data = action.payload
        })
        .addCase(filterProductsByPrice.rejected, (state, action)=>{
            state.isLoading = false
            state.isError = action.payload
        })
        
    }
})

export default productSlice.reducer
