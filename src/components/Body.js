import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
import {useState} from "react";
const Body = () => {
  const arr = useState(resList.restaurants
    );
    // const [ListOfRestaurants,setListOfRestaurants] = arr; // array destructuring
    const ListOfRestaurants = arr[0];
    const setListOfRestaurants = arr[1];

const ListOfRestaurantsJS = [
        {"info": {
          "id": "715380",
          "name": "Cheesecakes By CakeZone",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/3e88de88-8d8b-4cf3-9ba2-fefaa7bdb7af_715380.JPG",
          "locality": "Rajiv Gandhi Salai",
          "areaName": "Siruseri",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages",
            "Ice Cream",
            "Sweets"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "348057",
          "avgRatingString": "4.4",
          "totalRatingsString": "126",
          "sla": {
            "deliveryTime": 26
          }                  
      }},
      {"info": {
        "id": "715381",
        "name": "KFC",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/13/3e88de88-8d8b-4cf3-9ba2-fefaa7bdb7af_715380.JPG",
        "locality": "Rajiv Gandhi Salai",
        "areaName": "Siruseri",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Bakery",
          "Desserts",
          "Beverages",
          "Ice Cream",
          "Sweets"
        ],
        "avgRating": 3,
        "veg": true,
        "parentId": "348057",
        "avgRatingString": "4.4",
        "totalRatingsString": "126",
        "sla": {
          "deliveryTime": 26
        }                  
    }}
];

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={()=>{
                  const filteredList = ListOfRestaurants.filter(
                        (res) =>(res.info.avgRating > 4)
                  );
                  setListOfRestaurants(filteredList);
                  }}>Top Rated Restaurants</button>
            </div>
            <div className="res-container">
                {
                ListOfRestaurants.map((restuarant)=>{
                return <Restaurantcard key={restuarant.id} resList={restuarant} />     
})}
            </div>
        </div>
    )
}

export default Body;