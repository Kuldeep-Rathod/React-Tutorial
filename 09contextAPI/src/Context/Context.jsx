import React, {createContext, useContext} from "react";

const AppContexts = createContext();

//to create a provider function

const AppProvider = ({children}) => {
    return (
        <AppContexts.Provider value={"Kuldeep Rathod"}>
            {children}
        </AppContexts.Provider>
    )
}

//custom hook creation
const useGlobalContext = () => {
    return useContext(AppContexts);
}

export { AppContexts, AppProvider, useGlobalContext};