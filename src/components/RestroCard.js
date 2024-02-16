import { IMG_CDN } from "../constants"
export const RestroCard=({id,name,cloudinaryImageId,avgRating,cuisines})=>{
    // const{id,name,img,rating,cuisines}=restro
    return(
        <div className="card">
         <img alt="card" src={IMG_CDN+cloudinaryImageId}/>
         <h2>{name}</h2>
         <h3>{cuisines.join(", ")}</h3>
         <h4> {avgRating} stars </h4>
        </div>
    )
 }