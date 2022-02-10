import {React} from 'react'
import Sublinks from './sublinks'
import {FaBars} from 'react-icons/fa'
import {IoCloseSharp} from 'react-icons/io5'
import { useGlobalContext } from './context'
const Navbar = ()=>{
        const {isSidebarOpen, setIsSidebarOpen, openSubmenu} = useGlobalContext()
const displaySubmenu = (e)=>{
    const page = e.target.textContent
    const tempBtn = e.target.getBoundingClientRect()
    const center = (tempBtn.left + tempBtn.right)/2
    const bottom = tempBtn.bottom + 3
    openSubmenu(page, {center, bottom})
    }
    return (
        <nav className='nav'>
            <ul className='nav-list'>
                {
                Sublinks.map((link, index)=>{
                    const {page} = link
                    return (
                        <li key={index}>
                            <button onMouseOver={displaySubmenu}>{page}</button>
                        </li>
                    )
                })
                }
            </ul>
            <button 
            className='toggle-btn' 
            onClick={()=> setIsSidebarOpen(!isSidebarOpen)}>
                {isSidebarOpen && <IoCloseSharp/>}
                {!isSidebarOpen && <FaBars/>}
                </button>
        </nav>
    )
}
export default Navbar