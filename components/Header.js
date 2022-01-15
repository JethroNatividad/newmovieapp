import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { HomeIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header >
            <div className="pt-5">
                <HeaderItem title="Home" Icon={HomeIcon} />

            </div>
            <Image height={100} width={200} src="https://links.papareact.com/ua6" className="object-contain" alt="Hulu logo" />
        </header>
    )
}

export default Header
