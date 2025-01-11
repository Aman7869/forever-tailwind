import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from '../../pages/Home/Home';
import Collection from '../../pages/Collection/Collection';
import Product from '../../pages/Product/Product';
import Cart from '../../pages/Cart/Cart';

const Main = ({showSearch,setShowSearch = {setShowSearch}}) => {
    return (
        <>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/collection" element={<Collection showSearch = {showSearch} setShowSearch={setShowSearch} />} />
                    <Route path="/product/:productId" element={<Product />} />
                    <Route path="/cart" element={<Cart />} />
                    {/* <Route path="*" element={<PageNotFound />} /> */}
                </Routes>
            </main>
        </>
    )
}

export default Main