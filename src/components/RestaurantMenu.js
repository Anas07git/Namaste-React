import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN, MENU_ITEM_TYPE_KEY, RESTAURANT_TYPE_KEY, SWIGGY_MENU_API_URL, SWIGGY_RESTRO_CARD_API_URL } from '../constants'

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

 
  
  return (
   <div>

   </div>
  )
}

export default RestaurantMenu
