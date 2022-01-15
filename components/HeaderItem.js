import React from 'react'

const HeaderItem = ({ title, Icon }) => {
    return (
        <div className="group flex flex-col w-12 sm:w-20 items-center cursor-pointer hover:text-orange-300 transition-colors duration-300">
            <Icon className="h-8 group-hover:animate-bounce mb-1 " />
            <p className="tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">{title}</p>
        </div>
    )
}

export default HeaderItem
