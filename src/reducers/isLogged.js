const isLogged = (state = false , action) => {
    switch(action.type){
        case "SIGN_UP":
            return !state
        default:
            return
    }
}

export default isLogged;