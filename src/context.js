import React, { useState, useContext } from 'react'

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [openSideBar, setOpenSideBar] = useState(false);
    const [openModal, setOpenModal] = useState(false);

    const OpenSideBar = () => {
        setOpenSideBar(true)
    }
    const closeSideBar = () => {
        setOpenSideBar(false)
    }

    const OpenModal = () => {
        setOpenModal(true)
    }
    const CloseModal = () => {
        setOpenModal(false)
    }
    return <AppContext.Provider value={{
        openSideBar,
        openModal,
        OpenModal,
        CloseModal,
        OpenSideBar,
        closeSideBar
    }}>
        {children}
    </AppContext.Provider>
}

//custom hooks
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}