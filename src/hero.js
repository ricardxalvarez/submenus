import {React} from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {useGlobalContext } from './context'

const Hero = ()=>{

    return (
        <section className='hero'>
            <div className="items-container">
            <h1>Feel the <hr/>Strength.</h1>
            <button 
            >Shop Now <AiOutlineShoppingCart/></button>
            </div>
        </section>
    )
}
export default Hero