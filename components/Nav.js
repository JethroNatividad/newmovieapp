import React from 'react'
import navItems from '../utils/fetch'
const Nav = () => {
    return (
        <nav className="relative">
            <div className="absolute top-0 left-0 w-[5%] h-full bg-gradient-to-r from-bluish" />
            <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-scroll h-auto hide-scroll text-2xl sm:text-3xl justify-center">

                {navItems.map(({ id, title, endpoint }) => (<p key={id} className="hover:text-orange-200 cursor-pointer transition-all whitespace-nowrap">{title}</p>))}

            </div>
            <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-bluish" />
        </nav>
    )
}

export default Nav
