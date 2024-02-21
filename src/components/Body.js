import { useEffect, useState } from "react"
import { SWIGGY_RESTRO_CARD_API_URL, restroList } from "../constants"
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
        const data = await fetch(SWIGGY_RESTRO_CARD_API_URL)
        const jsonData = await data.json()
        // console.log(jsonData)

        const res = jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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