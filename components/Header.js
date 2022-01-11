import Image from 'next/image'
import React from 'react'

const Header = () => {
    return (
        <header>
            Header
            <Image height={200} width={200} src="https://www.hulu.com/assets/images/logo-hulu-white.svg" alt="Hulu logo" />
        </header>
    )
}

export default Header
