import { Link } from "react-router-dom";
import { IMG_CDN } from "../constants";
export const RestroCard = ({
  id,
  name,
  cloudinaryImageId,
  avgRating,
  cuisines,
  sla,
  costForTwo,
}) => {
  // const{id,name,img,rating,cuisines}=restro
  return (
    <div className="w-72 p-3 m-4 border-solid border-2 border-black  shadow-xl bg-orange-50 hover:scale-125 rounded-lg">
      <img
        alt="card"
        src={IMG_CDN + cloudinaryImageId}
        className="w-full rounded-md"
      />
        <h2 className="text-xl font-medium">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>

      <span className="flex justify-between mt-2 text-center items-center">
        <h4 className="text-lg font-medium mt-2.5 pr-0.5 flex items-center rounded-md p-1">
          <svg
            class="w-4 h-4 text-yellow-600 me-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
          </svg>
          {avgRating}
        </h4>
        <h4 className="text-lg font-medium   mt-2.5 pr-0.5">•</h4>
        <h4 className="text-lg font-medium   mt-2.5 pr-0.5">
          {sla?.lastMileTravelString ?? "2.0 km"}
        </h4>
        <h4 className="text-lg font-medium   mt-2.5 pr-0.5">•</h4>
        <h4 className="text-lg font-medium   mt-2.5 pr-0.5">
          {costForTwo ?? "₹200 for two"}
        </h4>
      </span>
    </div>
  );
};
