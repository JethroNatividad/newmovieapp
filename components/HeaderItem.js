import React from 'react'

const HeaderItem = ({ title, Icon }) => {
    return (
        <div className="group flex flex-col w-12 sm:w-20 items-center">
            <Icon className="h-8 group-hover:animate-bounce mb-1" />
            <p className="tracking-widest uppercase hidden group-hover:block ">{title}</p>
        </div>
    )
}

export default HeaderItem
