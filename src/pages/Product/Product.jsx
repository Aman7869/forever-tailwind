import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../../utils/context'
import { useParams } from 'react-router-dom'
import ProductCard from '../../Components/ProductCard'

const Product = () => {
    const { productsList } = useContext(ProductContext)
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState([])
    const [relatedProduct, setrelatedProduct] = useState([])
    const [productSize, setProdcutSize] = useState("")
    console.log('singleProduct: ', singleProduct)
    console.log('productSize: ', productSize)

    useEffect(() => {
        const result = productsList?.filter((item) => item?._id === productId)
        setSingleProduct(result);
    }, [])

    useEffect(() => {
        const relatedResult = productsList?.filter((item) => item?.subCategory === singleProduct[0]?.subCategory && item?.category === singleProduct[0]?.category && item?.bestseller === singleProduct[0]?.bestseller);
        const fiveRelatedProduct = relatedResult.slice(Math.max(relatedResult.length - 5, 1))
        console.log('fiveRelatedProduct: ', fiveRelatedProduct)
        setrelatedProduct(fiveRelatedProduct)
    }, [singleProduct])

 
    return (
        <div className='container mx-auto pt-9 border-t-2 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex gap-7'>
                <div className='flex gap-3'>
                    <div className='flex-[0.3]'>
                        <img src={singleProduct[0]?.image} alt="product" className='w-full' />
                    </div>
                    <div className='flex-1'>
                        <img src={singleProduct[0]?.image} alt="product" className='w-full h-[90%]' />
                    </div>

                </div>
                <div className='flex-[0.7]'>
                    <h1 className='text-3xl'>Men Round Neck Pure Cotton T-shirt</h1>
                    <div className=" flex items-center gap-1 mt-2"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg==" alt="" className="w-3 5" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg==" alt="" className="w-3 5" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg==" alt="" className="w-3 5" />
                        <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHESURBVHgBtVVNTsJQEP6mgmtuIO5cGC0nEE/g74KdeARPIDdQTqBLEwXhBnACiBDjjnIDgiuBvvFRrOnPezhN5EtI6XSmX2b6ffMIGcGXbhmKr0CqTY1BS1pHyAi+OBjpS1H/JvCdXWr1J5I6BxkQdLMiWaKA3MKV1mYiAuuRRaGcEwiRjQhcjt0SqhBCTJQYW4gCX+6XJfXyjpJjCyEcn0h1fOoWsKV6SHe0hEh9AdGvN+xUrs60K4zh6Vd17Czac0HexQFjs5iE38jDJsEhUX52vDEyRh9qdhwTA5/v34KcGv4LzPfUHNws/6ZUF/iCnQeYFSYk0NNhrtLroBuGjPLmyl4R8/ydfnyK7Cwd+J9n1PJicl/ro8imFnLAo+bbrumR80eh6AiQwNoRV1w9PjVCVvBWkZq9cTJs72iuxEdAHH7VFLUTsfwIiIESR8k6omBstt2mvQF/UQKrGsxMZT4v7SSjOWOuaWxpb/S157pGz5G/tEU9GrKMLukf7Q01LUUNGGS9DDur9cWPifyU/8wdQeFHkFreqkaNYR0W0NOHpy/Xen15kfWVsoV9M3zlD5Hzx/T83ocQq42yfQR/2k5uhm9CG7C+Nfr7TwAAAABJRU5ErkJggg==" alt="" className="w-3 5" /><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAZCAYAAAAv3j5gAAAACXBIWXMAABCcAAAQnAEmzTo0AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHASURBVHgBtVZLUsJAEO0OaFmuuIHhBIJLyg/ZWIIL8QTGI3gCOQKcQG+gLKwswVLLnXID4AbZiR/S9owEyWQSJxZ5izB00/2mH9M9QcgIevDqYMEZzKiH+81b0ziEjKAnbwQENq98+Hwvo3Pqm8RZkAGyGkkigCUoblRMYzMRScmWgXQChshGBFBXvrtgCGOiqGwhsCTtqySKybbgMpPPiIheb0oQly2ES33pT4U83oveSKaqAGElJcuYn4NEv+g5mebRI8gV5P9IR3JHOfLgnOgLnPzIaCjyR0YQj5dLJmzDykAd3G1eiFVs1s374oo9NvwXQp0CuVhr3oem2PHGvcZASoloPJkVcPy0ukwi86ZFcHWjTJVxJbzRss6V3rCIRleACRIromfPhhmMICs2Axt3jieqObkiQuMrIII3y9WZk4kC8ysgAtLPRC2RlE3MN32mDmBQZdHbej/U6eVuSzUW9bmEbKTuVO2NIZ9KsY733LTQ4md32aSXLqCWYtH3RthzANd/xCdU9FuFDwVsY+2om/QTdBpj/jjn8TVejC+kWFtojzf1+T9ax234sCboHA7BEDJujQ74NaynvoZ9A1WXpcuUkbt/AAAAAElFTkSuQmCC" alt="" className="w-3 5" /><p className="pl-2">(122)</p>
                    </div>

                    <h1 className='text-3xl font-bold pt-4'>${singleProduct[0]?.price}</h1>
                    <p className='pt-7 text-gray-500'>{singleProduct[0]?.description}</p>

                    <div>
                        <h4 className='pt-5 text-[18px]'>Select Size</h4>
                        <form action="">
                            <div className='flex pt-4 pb-8 gap-3'>
                                {/* <div className="form-check-inline gender-inline">
                                    <input className="gender required w-0 h-0 absolute invisible" type="radio" name="gender" id="genderRadio1" value="Male" aria-required="true" />
                                    <label className="form-check-label" for="genderRadio1"><span className='border-2 border-black rounded-md text-black text-center h-10 flex justify-center items-center cursor-pointer px-4 w-[70px]'>Male</span></label>
                                </div>
                                <div className="form-check-inline gender-inline">
                                    <input className="gender required w-0 h-0 absolute invisible" type="radio" name="gender" id="genderRadio1" value="Male" aria-required="true" />
                                    <label className="form-check-label" for="genderRadio1"><span className='border-2 border-black rounded-md text-black text-center h-10 flex justify-center items-center cursor-pointer px-4 w-[70px]'>Male</span></label>
                                </div> */}

                                {
                                    singleProduct[0]?.sizes?.map((size) => 
                                    <div className="form-check-inline gender-inline" key={size}>
                                        <input className="gender required w-0 h-0 absolute invisible" type="radio" name="gender" id="genderRadio1" value={size} aria-required="true" onClick={(e)=>setProdcutSize(size) } />
                                        <label className="form-check-label" for="genderRadio1"><span className='border-2 border-black rounded-md text-black text-center h-10 flex justify-center items-center cursor-pointer px-4 w-[70px]'>{size}</span></label>
                                    </div>)
                                }
                                {/* {
                                    singleProduct[0]?.sizes?.map((size) => <input type='radio' className='border border-gray-400 w-[10%] h-10 bg-gray-200 focus:border-red-400' value={size} name='size' />)
                                } */}
                            </div>
                            <button className='bg-black text-white p-3 mb-7 w-[38%]'>ADD TO CART</button>
                        </form>
                        <hr className='border-gray-300' />
                        <div className='pt-5'>
                            <p className='text-gray-500'>100% Original product.</p>
                            <p className='text-gray-500'>Cash on delivery is available on this product.</p>
                            <p className='text-gray-500'>Easy return and exchange policy within 7 days.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='description-section'>
                <div className='mb-[1%]'>

                    <p className='inline border transition-opacity ease-in duration-500 opacity-100 font-bold p-3'>Description</p>
                    <p className='inline border transition-opacity ease-in duration-500 opacity-100  p-3'>Reviews (122)</p>
                </div>
                <div className='border transition-opacity ease-in duration-500 opacity-100 p-5'>
                    <p className='text-gray-500 pt-1'>An e-commerce website is an online platform that facilitates the buying and selling of products or services over the internet. It serves as a virtual marketplace where businesses and individuals can showcase their products, interact with customers, and conduct transactions without the need for a physical presence. E-commerce websites have gained immense popularity due to their convenience, accessibility, and the global reach they offer.</p>
                    <p className='text-gray-500 pt-4'>E-commerce websites typically display products or services along with detailed descriptions, images, prices, and any available variations (e.g., sizes, colors). Each product usually has its own dedicated page with relevant information.</p>
                </div>
            </div>
            <section className='related-product pt-12'>
                <div className='flex justify-center'>
                    <h1 className='font-normal text-3xl text-[#414141] font-prata pr-2'><span className='text-gray-500'>RELATED</span> PRODUCTS</h1>
                    <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
                </div>

                <div className='flex justify-center gap-4 pt-9'>
                    {
                        relatedProduct && (
                            relatedProduct?.map((item) => {
                                if (item?.subCategory === singleProduct[0]?.subCategory && item?.category === singleProduct[0]?.category && item?.bestseller === singleProduct[0]?.bestseller) {
                                    return (
                                        <ProductCard key={item?._id} image={item?.image} productName={item?.name} price={item?.price} />
                                    )
                                }
                            })
                        )
                    }
                </div>
            </section>
        </div>
    )
}

export default Product