import React, { useEffect, useState } from 'react';
import Banner from "../../assets/images/forever-banner.png";
import { axiosGet } from "../../utils/utility";
import ProductCard from '../../Components/ProductCard';
import icon1 from "../../assets/images/forever-icon1.png";
import icon2 from "../../assets/images/forever-icon2.png";
import icon3 from "../../assets/images/forever-icon3.png";

const Home = () => {
  const [products, setProducts] = useState([])
  const getProduct = async () => {
    const result = await axiosGet("https://api.foreverbuy.in/api/product/list");
    console.log('result: ', result)
    setProducts(result?.products);
  }
  useEffect(() => {
    getProduct();
  }, [])
  console.log("products", products);
  return (
    <>
      <section className='container border border-gray-400 mx-auto'>
        <div className='flex'>
          <div className='w-1/2'>
            <div className='flex flex-row h-full justify-center items-center'>
              <div>
                <div className='flex'>
                  <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
                  <p className='font-normal pl-2 text-[#414141] font-prata'>OUR BESTSELLERS</p>
                </div>
                <h1 className='font-normal text-6xl text-[#414141] font-prata'>Latest Arrivals</h1>
                <div className='flex'>
                  <p className='font-normal pr-2 text-[#414141] font-prata'>SHOP NOW</p>
                  <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
                </div>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <img src={Banner} alt="banner" className='' />
          </div>
        </div>
      </section>

      <section className='latest-collection container mx-auto pt-12'>
        <div className='flex justify-center'>
          <h1 className='font-normal text-3xl text-[#414141] font-prata pr-2'>LATEST COLLECTIONS</h1>
          <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
        </div>
        <p className=' text-[#414141] text-center pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>

        <div className='flex justify-between pt-9'>
          {
            products && (
              products?.map((item) => {
                if (item?.bestseller) {
                  return (
                    <ProductCard key={item?._id} image={item?.image} productName={item?.name} price={item?.price} />

                  )
                }
              })
            )
          }
        </div>
      </section>

      <section className='best-seller-collection container mx-auto pt-12'>
        <div className='flex justify-center'>
          <h1 className='font-normal text-3xl text-[#414141] font-prata pr-2'>BEST SELLERS</h1>
          <p className=' bg-[#414141] h-[2px] w-12 my-auto'></p>
        </div>
        <p className=' text-[#414141] text-center pt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>

        <div className='flex justify-between pt-9'>
          {
            products && (
              products?.map((item) => {
                if (item?.bestseller) {
                  return (
                    <ProductCard key={item?._id} image={item?.image} productName={item?.name} price={item?.price} />

                  )
                }
              })
            )
          }
        </div>
      </section>

      <section className='policy-section container mx-auto pt-24 pb-20'>
        <div className='flex justify-around'>
          <div className='text-center'>
            <img src={icon1} alt="icon1" className='mx-auto w-[50px]' />
            <p className='font-bold pt-3'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We offer hassle free exchange policy</p>
          </div>
          <div className='text-center'>
            <img src={icon2} alt="icon1" className='mx-auto w-[50px]' />
            <p className='font-bold pt-3'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy</p>
          </div>
          <div className='text-center'>
            <img src={icon3} alt="icon1" className='mx-auto w-[50px]' />
            <p className='font-bold pt-3'>Best customer support</p>
            <p className='text-gray-400'>we provide 24/7 customer support</p>
          </div>
        </div>
      </section>

      <section className='subscribe-now-section container mx-auto'>
        <h2 className='text-center text-2xl font-bold'>Subscribe now & get 20% off</h2>
        <p className='text-gray-400 text-center pt-2'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        
          <div className='flex justify-center pt-4'>
            <input type="text" placeholder='Enter your email' className='border border-gray-400 w-[32%] p-[10px]' />
            <button type='button' className='bg-black text-white p-[9px_23px] text-xs'>SUBSCRIBE</button>
          </div>
       
      </section>
    </>
  )
}

export default Home