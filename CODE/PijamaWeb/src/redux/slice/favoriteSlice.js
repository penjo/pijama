import { createSlice } from "@reduxjs/toolkit"

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState: {
        favorites: [],
    },
    reducers: {
        addFavoriteAction: (state, action) => {
            console.log('addFavoriteAction', action.payload)
            state.favorites = [...state.favorites, action.payload]
        },
        removeFavoriteAction: (state, action) => {
            console.log('addFavoriteAction', action.payload)
            const list = state.favorites
            state.favorites = list.filter( el => el.ID !== action.payload );
        },
    },
    extraReducers: (builder) => {
        
    },

})

export const {
    addFavoriteAction,
    removeFavoriteAction
} = favoriteSlice.actions


export default favoriteSlice.reducer