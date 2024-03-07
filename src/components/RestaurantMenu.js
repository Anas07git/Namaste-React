import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN, ITEM_IMG_CDN, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_MENU_API_URL, SWIGGY_RESTRO_CARD_API_URL } from '../constants'
import ShimmerUI from './ShimmerUI'
import useRestaurantMenu from '../hooks/useRestaurantMenu'

const RestaurantMenu = () => {
  const{id}=useParams()
     
  const[restaurant,menuItems]=useRestaurantMenu(id,SWIGGY_MENU_API_URL,RESTAURANT_TYPE_KEY,MENU_ITEM_TYPE_KEY)

 
  
  return (!restaurant)?(<ShimmerUI/>):(
   <>
      {/* <div className='restaurant-summary-details'>
        <img className='restro-image' src={IMG_CDN+restaurant?.cloudinaryImageId} alt={restaurant?.name}/>
         <h2>{restaurant?.name}</h2>
         <p> {restaurant?.cuisines.join(", ")}</p>
         <h3>{restaurant?.avgRating} Stars </h3>
         <h4>Approx Time : {restaurant?.sla?.slaString}</h4>
      </div>

      <div className='menu-items-list' >

        <h4>MENU LIST:</h4>
        
        {
          menuItems.map((item)=>(
             <div key={item.id} className='menu-item'>
               
               <h3>{item.name}</h3>
               <p>
                {
                   item?.price > 0
                    ? new Intl.NumberFormat("en-IN", {
                        style: "currency",
                        currency: "INR",
                      }).format(item?.price / 100)
                    : " "
                }
               </p>
               <p>{item.description}</p>
               <div className="menu-img-wrapper">
                  {item?.imageId && (
                    <img
                      className="menu-item-img"
                      src={ITEM_IMG_CDN + item?.imageId}
                      alt={item?.name}
                    />
                  )}
                  <button className="add-btn"> ADD +</button>
                </div>
              </div>
          ))
        }

      </div> */}
      <div className='mt-20 min-h-[80vh] w-auto	'>

        {/* Restaurant Summary */}

        <div className='flex h-[200px] justify-center items-center overflow-y-hidden bg-orange-200 text-black'>
        <img
          className="w-64 h-40 rounded-lg "
          src={IMG_CDN + restaurant?.cloudinaryImageId}
          alt={restaurant?.name}
        />
        <div className='flex flex-col m-5 basis-[520px]'>
          <h2 className='font-medium max-w-lg text-4xl'>{restaurant?.name}</h2>
          <p className='whitespace-nowrap text-base max-w-lg opacity-90 text-inherit'> {restaurant?.cuisines?.join(", ")}</p>
          <div className='flex mt-4 justify-between items-center text-base font-semibold pb-2.5 text-inherit max-w-80'>
            
            <h4 className="text-lg font-medium mt-0.5 pr-0.5 flex items-center rounded-md p-1">
          <svg
            class="w-4 h-4 text-yellow-600 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {restaurant?.avgRating}
        </h4>
            
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.sla?.slaString}</div>
            <div className="restaurant-rating-slash">|</div>
            <div>{restaurant?.costForTwoMessage}</div>
            </div>
          </div>
        </div>


      {/* RestaurantMenu Content */}
        <div className='flex justify-center'>
          <div className='mt-8 w-[850px] '>
            
            <p className='mt-2 text-lg font-bold leading-snug	'>{menuItems.length} Items</p>

             {/* Menu Items List */}
            <div className='flex flex-col justify-center divide-y divide-gray-700'>
             {
              menuItems.map((item) =>(
                <div className='flex justify-between p-5 ' key={item.id}> 

                  <div className='flex flex-col self-start overflow-hidden h-auto'>
                   <h3 className="w-auto font-medium">{item?.name}</h3>
                   <p className='mt-1 text-base font-normal text-gray-800 w-[inherit]'>
                    {item?.price > 0
                      ? new Intl.NumberFormat("en-IN", {
                          style: "currency",
                          currency: "INR",
                        }).format(item?.price / 100)
                      : " "}
                  </p>
                  <p className="mt-3 text-base leading-snug w-[inherit] text-black tracking-normal ">{item?.description}</p>

            
                   </div>

                   {/* Menu Item Image */}
                   <div className="flex flex-col justify-center items-end overflow-hidden h-auto w-[300px]">
                   {item?.imageId && (
                     <img
                     className="h-[100px] w-[100px] rounded"
                     src={ITEM_IMG_CDN + item?.imageId}
                     alt={item?.name}
                     />
                     )}
                  <button className="mt-[10px] rounded  py-2 px-6 bg-orange-800 text-white border-black "> ADD +</button>
                   </div>

                </div>
              )
              
              )
             }
            </div>
          </div>
        </div>
      </div>
   </>
  )
}

export default RestaurantMenu
