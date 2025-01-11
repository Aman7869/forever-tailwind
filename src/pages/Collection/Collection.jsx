import React, { useEffect, useState,useContext } from 'react';
import { axiosGet } from "../../utils/utility";
import ProductCard from '../../Components/ProductCard';
import SearchSection from '../../Components/SearchSection'
import FilterProducts from '../../Components/FilterProducts';
import { ProductContext } from '../../utils/context';
import { Link } from 'react-router-dom';

const Collection = ({showSearch,setShowSearch}) => {
    const [products, setProducts] = useState([]);
    const [filterProducts, setFilterProducts] = useState([]);
    const [filterValue, setFilterValue] = useState([]);
    const [searchValue, setSearchValue] = useState("");
    console.log('filterProducts: ', filterProducts)
    const {productsList,setProductsList} = useContext(ProductContext)

    const categoryArr = ["Men", "Women", "Kids"]
    const typesArr = ["Topwear", "Bottomwear", "Winterwear"];
    const getProduct = async () => {
        const result = await axiosGet("https://api.foreverbuy.in/api/product/list");
        setProducts(result?.products);
        setFilterProducts(result?.products);
        setProductsList(result?.products);
    }
    useEffect(() => {
        getProduct();
    }, [])

    useEffect(() => {
        
        const timeOut = setTimeout(()=> {
            if(searchValue){
                const result = filterProducts?.filter((item) => item?.name?.toLowerCase().includes(searchValue?.toLowerCase()));
                if(result){
                    setFilterProducts(result);
                } else {
                    setFilterProducts(products);
                }
            }
        },900)

        return ()=> {
            clearTimeout(timeOut)
        }
        
    }, [searchValue])
    

    useEffect(() => {
        
        let result = products;
        if (filterValue?.includes("category")) {
            result = result?.filter((item) => filterValue?.includes(item?.category));
        }
        if (filterValue?.includes("subcategory")) {
            result = result?.filter((item) => filterValue?.includes(item?.subCategory));
        }
        if (result?.length > 0) {
            setFilterProducts(result);
        } else {
            setFilterProducts(products);
        }
    }, [filterValue])

    return (
        <section className='container mx-auto'>
            {
               showSearch && (
                    <SearchSection setShowSearch = {setShowSearch} setSearchValue={setSearchValue} />
                )
            }

            <div className="flex gap-6 pt-10">
                <div className="filter-section w-1/6">
                    <FilterProducts categoryArr={categoryArr} typesArr={typesArr} setFilterValue={setFilterValue} />
                </div>
                <div className='all-collection w-full'>
                    <div className='flex'>
                        <h1 className='font-normal text-2xl text-[#414141] font-prata pr-2'>ALL COLLECTIONS</h1>
                        <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
                    </div>

                    <div className='product-list'>
                        <div className='flex flex-wrap justify-between pt-9'>
                            {
                                filterProducts && (
                                    filterProducts?.toReversed()?.map((item) => {
                                        if (item) {
                                            return (
                                                <Link to={`/product/${item?._id}`}>
                                                <ProductCard key={item?._id} image={item?.image[item.image.length - 1]} productName={item?.name} price={item?.price} productId={item?._id} />
                                                </Link>
                                            )
                                        }
                                    })
                                )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Collection