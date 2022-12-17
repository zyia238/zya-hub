import { createContext, useReducer } from "react"

export const HeroContext = createContext(null)


const heroReducer = (state, action) => {
    const { type , payload } = action 
    switch(type){
        case 'NAV_GO_DARK':
            return {
                ...state,
                transparent:false
            }
        case 'NAV_GO_TRANSPARENT':
            return {
                ...state,
                transparent: true
            }
        default:
        throw new Error('no matched action type')
    }
}

const defaultState = {
    height:0
}

const HeroProvider = ({children}) => {
    const [state,dispatch] = useReducer(heroReducer , defaultState)
    return (
        <HeroContext.Provider value={{state,dispatch}}>
            {children}
        </HeroContext.Provider>
    )
}

export default HeroProvider