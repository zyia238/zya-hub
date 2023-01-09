import { createContext, useState } from "react"

interface ContextProps {
    transparent:boolean;
    setTransparent:React.Dispatch<React.SetStateAction<boolean>>
}

export const HeroContext = createContext<ContextProps>({
    transparent:false,
    setTransparent:()=>{}
})

interface HeroProviderProps {
    children:JSX.Element
}

const HeroProvider = ({children}:HeroProviderProps) => {
    const [transparent,setTransparent] = useState<boolean>(false)
    return (
        <HeroContext.Provider value={{transparent,setTransparent}}>
            {children}
        </HeroContext.Provider>
    )
}

export default HeroProvider