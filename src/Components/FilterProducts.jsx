import React from 'react'

const FilterProducts = ({ categoryArr, typesArr, setFilterValue }) => {
    const handleChange = (e, item) => {
        if (e.target.checked) {
            setFilterValue((prevItem) => {
                return [...prevItem, item, e.target.className];
            })
        } else {
            setFilterValue((prevItem) => {
                return prevItem?.filter((itemPev) => itemPev !== item)
            })

            setFilterValue((prevItem) => {
                const index = prevItem.lastIndexOf(e.target.className);
                prevItem.splice(index, 1);
                return prevItem;
            })
        }
    }
    return (
        <>
            <h2 className='text-xl'>FILTERS</h2>
            <div className="categories w-full border border-gray-300 p-[10px_15px] mt-10">
                <p className='font-bold'>CATEGORIES</p>
                {
                    categoryArr?.map((item, index) => <React.Fragment key={index}>
                        <div className='pt-2'>
                            <input type="checkbox" className='category' value={item} name={item.toLocaleLowerCase()} onChange={(e) => handleChange(e, item)} /> <span className='text-gray-600'>{item}</span>
                        </div>
                    </React.Fragment>)
                }
            </div>
            <div className="type w-full border border-gray-300 p-[10px_15px] mt-5">
                <p className='font-bold'>TYPES</p>
                {
                    typesArr?.map((item, index) => <React.Fragment key={index}>
                        <div className='pt-2'>
                            <input type="checkbox" className='subcategory' name={item.toLocaleLowerCase()} onChange={(e) => handleChange(e, item)} /> <span className='text-gray-600'>{item}</span>
                        </div>
                    </React.Fragment>)
                }

            </div>
        </>
    )
}

export default FilterProducts