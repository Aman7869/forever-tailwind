import React from 'react'
import Logo from "../../../assets/images/forever-logo.png";
import SearchIcon from "../../../assets/images/forever-search.png";
import UserIcon from "../../../assets/images/forever-user.png"
import AddCart from "../../../assets/images/add-cart.png"
import { Link, useNavigate } from 'react-router-dom';

const Header = ({setShowSearch}) => {
    const navigate = useNavigate();
    const handleSearch = () => {
        setShowSearch(true);
        navigate("/collection");
    }
    return (
        <>
            <nav className='container mx-auto flex justify-between h-20'>
                <img src={Logo} alt="logo" className='w-36 h-10 my-auto' />
                <ul className='flex items-center gap-6'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/collection">Collection</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/product">Product</Link></li>
                </ul>
                <div className='my-auto flex align-middle gap-6'>
                    <img src={SearchIcon} onClick={handleSearch} alt="search" className='w-5 h-5 cursor-pointer' />
                    <img src={UserIcon} alt="search" className='w-5 h-5' />
                    <Link className='relative' to="/cart">
                    <img src={AddCart} alt="search" className='w-5 h-5' />
                    <p className='absolute bg-black text-white rounded-lg text-xs px-1 top-3 left-3'>0</p>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Header