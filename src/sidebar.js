import {React} from 'react'
import Sublinks from './sublinks'
import { useGlobalContext } from './context'

const Sidebar = ()=>{
    const {isSidebarOpen, closeSidebar} = useGlobalContext()

    return (
        <aside>
            <div className={`${isSidebarOpen? 'sidebar':'sidebar-closed'}`}>
                <div className="nav-header">

                <div className="sidebar-links">
                    {
                        Sublinks.map((link, index)=>{
                            const {page, links} = link
                            return (<article key={index}>
                        <h4>{page}</h4>
                        <div className="links-container">
                            {
                                links.map((link, index)=>{
                                    const {label, icon} = link
                                    return <a href="/" key={index}>{label} {icon}</a>
                                })
                            }
                        </div>
                        </article>
                        )
                    })
                }
                    </div>
                </div>
            </div>
        </aside>
    )
}
export default Sidebar