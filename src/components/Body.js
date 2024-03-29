import { useEffect, useState } from "react"
import { SWIGGY_RESTRO_CARD_API_URL} from "../constants"
import { RestroCard } from "./RestroCard"
import ShimmerUI from "./ShimmerUI"
import filterResto from "../utils/Helper"
import useOnline from "../hooks/useOnline"
import { Link } from "react-router-dom"


const Body = () => {
    const [search, setSearch] = useState("")
    const [allrestaurant, setAllRestaurant] = useState([])
    const [filteredRestaurant, setFilteredRestaurant] = useState([])
    const isOnline= useOnline()
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



     if(!isOnline){
        return <h1>Oops,Please check your internet connection </h1>
     }

    // Donot render any Component (Early return)
    if (!allrestaurant) return null

    console.log("Render")



    return (
        <>
            <div className="p-4 my-4 flex justify-center items-center w-full ">

                <input type="text" className="rounded-md w-64 p-1.5 m-1.5 focus:bg-orange-50 placeholder:text-gray-600 border-solid border-2 border-black shadow-lg focus:rin "
                    placeholder=" Search Restaurants..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)} />

                <button className="p-1.5 m-1.5 bg-orange-300 rounded-md hover:bg-orange-400"
                    onClick={() => {
                        const data = filterResto(search, allrestaurant)
                        setFilteredRestaurant(data) 
                    }}
                >
                    Search
                </button>

            </div>
            {(allrestaurant?.length === 0 || filterResto.length===0) ? <ShimmerUI /> :


                (<div className="w-auto flex flex-wrap items-center justify-center self-stretch">
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

                            return( 
                                
                                <Link to={"/restaurant/"+resto?.info?.id} key={resto?.info?.id}>
                                <RestroCard  {...resto?.info}  />
                            </Link>

                            )
                        })
                    }
                </div>)
            }
        </>
    )
}
export default Body