import React from 'react'
import SearchIcon from "../assets/images/forever-search.png";
import CrossIcon from "../assets/images/forever-cross.png";
const SearchSection = ({setShowSearch,setSearchValue}) => {
    return (
        <div className='border-t border-b border-gray-300 bg-gray-50 p-5'>
            <div className='flex justify-center'>
                <div className='w-1/2 relative'>
                    <input type="text" placeholder='Search' onChange={(e)=> setSearchValue(e.target.value)} className='border border-gray-400 w-full p-[6px_20px] rounded-3xl' />
                    <img src={SearchIcon} alt="search-icon" className='absolute top-[10px] right-[15px] w-4' />
                </div>
                <div className='flex items-center pl-2'>
                    <img src={CrossIcon} alt="close" className='w-3 h-3 cursor-pointer' onClick ={()=> setShowSearch(false)} />
                </div>
            </div>
        </div>
    )
}

export default SearchSection