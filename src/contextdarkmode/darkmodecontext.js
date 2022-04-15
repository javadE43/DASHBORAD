import {React,createContext,useReducer} from 'react'
import Darkmodereducer from './darkmoderadiuser'
const INITIAL_STATE={
    darkMode:false
}

export const DarkModecontext=createContext(INITIAL_STATE)



export const Darkmodecontextprovider=({children})=>{
       const [state,dispatch] =useReducer(Darkmodereducer,INITIAL_STATE);
       console.log(state)
    return(
        <DarkModecontext.Provider value={{darkMode:state.darkMode,dispatch}}>
           {children}
        </DarkModecontext.Provider>
    )
}