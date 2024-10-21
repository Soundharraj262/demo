import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState({});

    const updateState = (newState) => {
        setState(prevState => ({ ...prevState, ...newState }));
    };

    return (
        <AppContext.Provider value={{ state, updateState }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
