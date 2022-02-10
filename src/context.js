import React, {useState, useEffect, useContext} from "react";
import Sublinks from './sublinks'

const AppContext = React.createContext()

export const AppProvider = ({children})=>{
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [page, setPage] = useState({page:'', links:[]})
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const openSubmenu = (text, coordinates)=>{
        const newPage = Sublinks.find((link)=> link.page === text)
        setPage(newPage)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }
    const closeSubmenu = ()=>{
        setIsSubmenuOpen(false)
    }
    return (
    <AppContext.Provider value={{
        isSidebarOpen,
        setIsSidebarOpen,
        openSubmenu,
        closeSubmenu,
        isSubmenuOpen,
        page,
        location,
        setIsSubmenuOpen
    }}>
        {children}
    </AppContext.Provider>)
}

export const useGlobalContext = ()=>{
    return useContext(AppContext)
}