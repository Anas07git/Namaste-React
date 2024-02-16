import { useState } from "react"
import { restroList } from "../constants"
import { RestroCard } from "./RestroCard"

function filterResto(searchVal,restaurants){
     return restaurants.filter((restaurant)=> restaurant.data.name.toLowerCase().includes(searchVal))
}

const Body =()=>{
  const[search,setSearch]=useState("")
  const[restaurant,setRestaurant]=useState(restroList)
    return (
        <>
        <div className="search-bar">

  <input type="text" className="search-input"
                     placeholder="Search" 
                     value={search} 
                     onChange={(e)=> setSearch(e.target.value)}/>

        <button className="search-btn"
         onClick={()=>{
            const data = filterResto(search,restaurant)
            setRestaurant(data)
         }}
        >
            Search
            </button>

       </div>


        <div className="restro-list">
           {/* <RestroCard restro={restroList[0].data}/>
           <RestroCard restro={restroList[1].data}/>
           <RestroCard restro={restroList[2].data}/>
           <RestroCard restro={restroList[3].data}/>
           <RestroCard restro={restroList[4].data}/>
           <RestroCard restro={restroList[5].data}/>
           <RestroCard restro={restroList[6].data}/>
           <RestroCard restro={restroList[7].data}/>
         */}
        {
            restaurant.map((resto)=>{
                return <RestroCard key={resto.data.id} {...resto.data}/>
            } )
        }
        </div>
        </>
    )
}
export default Body