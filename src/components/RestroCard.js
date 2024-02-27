import { Link } from "react-router-dom"
import { IMG_CDN } from "../constants"
export const RestroCard=({id,name,cloudinaryImageId,avgRating,cuisines})=>{
    // const{id,name,img,rating,cuisines}=restro
    return(
        <div className="card">
         <img alt="card" src={IMG_CDN+cloudinaryImageId}/>
            <Link to={"/restaurant/"+id} >
         <h2>{name}</h2>
         </Link>
         <h3>{cuisines.join(", ")}</h3>
         <h4> {avgRating} stars </h4>
        </div>
    )
 }