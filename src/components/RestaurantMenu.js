import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN, ITEM_IMG_CDN, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_MENU_API_URL, SWIGGY_RESTRO_CARD_API_URL } from '../constants'
import ShimmerUI from './ShimmerUI'

const RestaurantMenu = () => {
  const{id}=useParams()
  const[restaurant,setRestaurant]=useState(null)
  const[menuItems,setMenuItems]=useState([])

  useEffect(()=>{
    getRestaurantInfo()
  },[])

  async function getRestaurantInfo(){
    try{
    const menuApi= await fetch(SWIGGY_MENU_API_URL+id)
    const json= await menuApi.json()

    // Setting restaurant data
 const restroData= json?.data?.cards?.map(x=>x.card)?.find(x => 
                      x && x.card["@type"]===RESTAURANT_TYPE_KEY)?.card?.info || null  

      setRestaurant(restroData)

    // Setting Menu item data
 const menuData= json?.data?.cards?.find(x=> x.groupedCard)?.
                 groupedCard?.cardGroupMap?.REGULAR?.cards?.map(x=>x.card.card)?.
                 filter(x=> x["@type"]===MENU_ITEM_TYPE_KEY)?.map(x=>x.itemCards)?.flat()?.map(x=>x.card.info) || null
  

       const uniqueMenuItems=[]

       menuData.forEach((item)=>{
        if(!uniqueMenuItems.find(x=> x.id===item.id)){
           uniqueMenuItems.push(item)
        }
       })
       setMenuItems(uniqueMenuItems)

     console.log(uniqueMenuItems)
      
  }
  catch(err){
    setMenuItems([])
    setRestaurant(null)
    console.log(err)
  }
} 

 
  
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
