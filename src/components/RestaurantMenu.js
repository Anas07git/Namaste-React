import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN } from '../constants'

const RestaurantMenu = () => {
    const[restaurant,setRestaurant]=useState({})
    const{id}=useParams()
    useEffect(()=>{
        getRestaurantMenu()
    },[])

    async function getRestaurantMenu(){
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9710893&lng=72.8220707&restaurantId=24519&catalog_qa=undefined&submitAction=ENTER")
        const jsonData= await data.json()
        console.log(jsonData)
        setRestaurant(jsonData?.data?.cards[2]?.card?.card?.info)
    }
  return (
    <div className='menu'>
      <h2>Restaurant {id}</h2>
      <h2> {restaurant.name}</h2>
       <h2>{restaurant.areaName} </h2>
       <h2>{restaurant.city} </h2>
       <img src={IMG_CDN+restaurant.cloudinaryImageId}/>
       <h2>{restaurant.costForTwoMessage}</h2>
    </div>
  )
}

export default RestaurantMenu
