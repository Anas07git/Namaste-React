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
      <div className='restaurant-summary-details'>
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

      </div>
   </>
  )
}

export default RestaurantMenu
