import { useEffect, useState } from "react"
import { restroList } from "../constants"
import { RestroCard } from "./RestroCard"
import ShimmerUI from "./ShimmerUI"

function filterResto(searchVal, restaurants) {
    return restaurants.filter((restaurant) => restaurant.info.name.toLowerCase().includes(searchVal.toLowerCase()))
}


const Body = () => {
    const [search, setSearch] = useState("")
    const [allrestaurant, setAllRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    // console.log(filteredRestaurant)


    useEffect(() => {
        fetchRestro()
    }, [])

    async function fetchRestro() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.9710893&lng=72.8220707&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
        const jsonData = await data.json()
        // console.log(jsonData)

        res = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setAllRestaurant(res)
        setFilteredRestaurant(res)
    }



    // Donot render any Component (Early return)
    if (!allrestaurant) return null

    console.log("Render")



    return (
        <>
            <div className="search-bar">

                <input type="text" className="search-input"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <button className="search-btn"
                    onClick={() => {
                        const data = filterResto(search, allrestaurant)
                        setFilteredRestaurant(data)
                    }}
                >
                    Search
                </button>

            </div>
            {(allrestaurant?.length === 0) ? <ShimmerUI /> :


                (<div className="restro-list">
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
                        filteredRestaurant.map((resto) => {
                            return <RestroCard key={resto?.info?.id} {...resto?.info} />
                        })
                    }
                </div>)
            }
        </>
    )
}
export default Body