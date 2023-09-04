import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "User",
    initialState: {
        value: {
            email: "",
            idToken: "",
            localId: "",
            name: "",
            profileImage: ""
        }
    },
    reducers: {
        setUser: (state, action) => {
            state.value = action.payload
        },
        signOut: (state) => {
            state.value = {
                email: "",
                idToken: "",
                localId: "",
                profileImage: ""
            }
        },
        saveImage: (state, action) => {
            state.value.profileImage = action.payload
        },
        saveName: (state, action) => {
            state.value.name = action.payload
        }
    }
})

export const {
    setUser, 
    signOut, 
    saveImage,
} = userSlice.actions

export default userSlice.reducer