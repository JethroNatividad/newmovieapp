import Image from 'next/image'
import React from 'react'
import HeaderItem from './HeaderItem'
import { BadgeCheckIcon, CollectionIcon, HomeIcon, LightningBoltIcon, SearchIcon, UserIcon } from '@heroicons/react/outline'

const Header = () => {
    return (
        <header className="flex flex-col sm:flex-row justify-between items-center">
            <div className="pt-5 flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="trending" Icon={LightningBoltIcon} />
                <HeaderItem title="verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="collections" Icon={CollectionIcon} />
                <HeaderItem title="search" Icon={SearchIcon} />
                <HeaderItem title="account" Icon={UserIcon} />
            </div>
            <Image height={100} width={200} src="https://links.papareact.com/ua6" className="object-contain" alt="Hulu logo" />
        </header>
    )
}

export default Header
