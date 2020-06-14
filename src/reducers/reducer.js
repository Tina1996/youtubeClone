const initialState = []
export const reducer = (state=initialState,action) => {
    if(action.type == "ADD"){
        return action.payload
    }
    return state
}