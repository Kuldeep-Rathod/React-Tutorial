import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: [],
    reducers: {
        addUser(state, action) {
            state.push(action.payload)
            // console.log(action.payload)
        },
        removeUser(state, action) {
            // console.log("hello" + action.payload)
            // state.pop(action.payload)    //this is not use bcz only last item will be deleted 
            state.splice(action.payload, 1)
        },
        clearAllUsers(state, action) {
            // console.log("hellllllll")
            // return state = [];   //this is help to delete all but this is not right way
            return [];
        },
    },
})

export default userSlice.reducer ;
export const { addUser, removeUser, clearAllUsers } = userSlice.actions;