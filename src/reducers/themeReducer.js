const initialState = false
export const themeReducer = (state=initialState,action) => {
    if(action.type == "CHANGETHEME"){
        return action.payload
    }
    return state
}