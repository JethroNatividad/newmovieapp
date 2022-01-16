import React from 'react'

const Nav = () => {
    return (
        <nav className="relative">
            <div className="absolute top-0 left-0 w-1/12 h-full bg-gradient-to-r from-bluish" />
            <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-scroll h-fit hide-scroll">
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
                <p>Hello</p>
            </div>
            <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-bluish" />
        </nav>
    )
}

export default Nav
