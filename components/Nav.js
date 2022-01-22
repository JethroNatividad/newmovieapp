import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import navItems from '../utils/fetch'

const Nav = () => {
    const router = useRouter()
    const [currentGenre, setCurrentGenre] = React.useState(navItems[0].id)

    useEffect(() => {
        // get genre from url
        const genre = router.query.genre
        setCurrentGenre(genre)

    }, [router.query.genre])

    const handleNavClick = (id) => {
        console.log(navItems)
        router.push(`/?genre=${id}`)
    }

    return (
        <nav className="relative">
            <div className="absolute top-0 left-0 w-[5%] h-full bg-gradient-to-r from-bluish" />
            <div className="flex px-10 sm:px-20 space-x-10 sm:space-x-20 overflow-y-hidden overflow-x-scroll h-auto hide-scroll text-2xl sm:text-3xl">

                {navItems.map(({ id, title, endpoint }) => (<p key={id} onClick={currentGenre !== id ? () => handleNavClick(id) : () => (true)} className={`hover:text-orange-200 hover:scale-125 py-2 cursor-pointer transition-all whitespace-nowrap ${currentGenre === id && 'text-orange-300 scale-125'}`}>{title}</p>))}

            </div>
            <div className="absolute top-0 right-0 w-1/12 h-full bg-gradient-to-l from-bluish" />
        </nav>
    )
}

export default Nav
