import React from 'react'
import deleteIcon from "../../assets/images/delete.png"

const Cart = () => {
    return (
        <div className='container mx-auto pt-9 border-t-2 transition-opacity ease-in duration-500 opacity-100'>
            <div className='flex pt-5 pb-5'>
                <h1 className='font-normal text-2xl text-[#414141] font-prata pr-2'><span className='text-gray-500'>YOUR</span> CART</h1>
                <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
            </div>

            <div className='border-t border-b transition-opacity ease-in duration-500 opacity-100 flex py-4'>
                <div className='flex flex-[0.7] gap-6'>
                    <img src="https://raw.githubusercontent.com/avinashdm/gs-images/main/forever/p_img8.png" alt="product" className='w-20' />
                    <div>
                        <h4 className='font-bold text-lg text-gray-600'>Men Round Neck Pure Cotton T-shirt</h4>
                        <div className='flex gap-5 items-center pt-3'>
                            <p>$64</p>
                            <button type='button' className='border border-gray-400 w-[10%] h-8 bg-gray-200 focus:border-red-400'>L</button>
                        </div>
                    </div>
                </div>
                <div className='flex-[0.3] relative'>
                    <p className='absolute top-[35%]'>
                        <input type="number" className='border-2 transition-opacity ease-in duration-500 opacity-100 w-16 p-1' />
                    </p>
                </div>
                <div className='flex-[0.1] relative'>
                    <img src={deleteIcon} alt="delete" className='w-6 absolute top-[35%]' />
                </div>
            </div>

            <section className='card-total flex justify-end pt-16'>
                <div className='w-1/3'>
                    <div className='flex pt-5'>
                        <h1 className='font-normal text-2xl text-[#414141] font-prata pr-2'><span className='text-gray-500'>CART</span> TOTALS</h1>
                        <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
                    </div>
                    <div className='w-full pt-3'>
                        <div className='flex justify-between py-2'>
                            <p>Subtotal</p>
                            <p>$ 64.00</p>
                        </div>
                        <div className='flex justify-between border-t border-b transition-opacity ease-in duration-500 opacity-100 py-2'>
                            <p>Shipping Fee</p>
                            <p>$ 10.00</p>
                        </div>
                        <div className='flex justify-between py-2'>
                            <p>Total</p>
                            <p>$ 74.00</p>
                        </div>
                        <div className='pt-5'>
                        <button className='bg-black text-white p-3 mb-7 w-1/2 float-end'>PROCEED T0 CHECKOUT</button>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart