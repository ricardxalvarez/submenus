import React from "react"
import {AiFillCar, AiFillCreditCard, AiOutlineTeam, AiOutlineHistory, AiFillContacts } from 'react-icons/ai'
import {GiFlatTire, GiSteeringWheel} from 'react-icons/gi'
import {MdOutlineCategory, MdMiscellaneousServices} from 'react-icons/md'

const Sublinks = [
    {
        page: 'products',
        links: [
            { label: 'Tires', icon:<GiFlatTire/>},
            { label: 'Services', icon:<MdMiscellaneousServices/>},
            { label: 'Accessories', icon:<GiSteeringWheel/>},
        ]
    },
    {
        page: 'cars',
        links: [
            { label: 'List', icon:<AiFillCar/>},
            { label: 'Prices', icon:<AiFillCreditCard/>},
            { label: 'Categories', icon:<MdOutlineCategory/>},
        ]
    },
    {
        page: 'location',
        links: [
            { label: 'Latin America'},
            { label: 'the USA'},
            { label: 'Europe'},
        ]
    },
    {
        page: 'about us',
        links: [
            { label: 'team', icon:<AiOutlineTeam/>},
            { label: 'story', icon:<AiOutlineHistory/>},
            { label: 'contact', icon:<AiFillContacts/>},
        ]
    },
]

export default Sublinks