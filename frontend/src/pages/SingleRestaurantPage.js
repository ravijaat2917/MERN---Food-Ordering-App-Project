import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { brandsItems } from '../data/brandsLists';

const SingleRestaurantPage = () => {
  const params = useParams();
  const restaurantName = params.name;
  
  const [restaurant, setRestaurant] = useState();

  const getRestaurantDetails = () => {
    for (let i = 0; i < brandsItems.length; i++){
      if (brandsItems[i].link === restaurantName) {
        setRestaurant(brandsItems[i]);
      }
    }
  }

  useEffect(() => {
    getRestaurantDetails();
  }, []);

  return (
    <>
      <div className='mt-8 px-2  sm:mx-28'>
        <p className='text-2xl sm:text-4xl font-semibold tracking-wide sm:tracking-widest flex justify-between px-3 pt-3'>
          <span className='py-1 text-3xl sm:text-4xl text-slate-800'>
          {restaurant?.name}
          </span>
          <span className='block bg-green-500 px-2 text-white rounded-lg text-lg sm:text-1xl text-center tracking-tighter my-1 py-1'>{ restaurant?.rating} &#9733;</span>
        </p>
        <p className='text-slate-500 px-3'>{restaurant?.tags}</p>
        <p className=' px-3 py-1 text-slate-600'>Delivered within 30 minutes <span className='text-red-500 border px-2 rounded-full'>&#x2713;</span> </p>
        <div className='px-3'>
        <p className='pt-3 text-2xl text-slate-950'>Order Now </p>
          <hr/>
        </div>
      </div>
    </>

  )
}

export default SingleRestaurantPage
