import React,{useEffect} from 'react'
import Sublinks from './sublinks'
import { useGlobalContext } from './context'

const Submenu = ()=>{
    const { isSubmenuOpen, location, page:{page, links}, closeSubmenu} = useGlobalContext()
    const container = React.useRef(null)
    useEffect(()=>{
        const submenu = container.current
        const {center, bottom} = location
        submenu.style.left = `${center}px`
        submenu.style.top = `${bottom}px`
    })
    return (
        <aside ref={container} onMouseLeave={closeSubmenu} className={isSubmenuOpen? 'submenu': 'submenu submenu-closed'}>
            <div className="submenu-container">
                <h4>{page}</h4>
                <div className="links-center">
                    {
                        links.map((link, index)=>{
                            const {icon, label} = link
                            return <p key={index}>{icon} {label}</p>
                        })
                    }
                </div>
            </div>
        </aside>
    )
}
export default Submenu