import React, { useState } from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Main from './Main'

const DefaultLayout = () => {
    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
            <Header setShowSearch = {setShowSearch} />
            <Main showSearch = {showSearch} setShowSearch = {setShowSearch} />
            <Footer />
        </>
    )
}

export default DefaultLayout