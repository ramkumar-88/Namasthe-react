import Restaurantcard from "./Restaurantcard";
import resList from "../utils/mockData";
const Body = () => {

    return (
        <div className="body">
            <div className="search">
                Search
            </div>
            <div className="res-container">
                {
                resList.restaurants.map((restuarant)=>{
                return <Restaurantcard key={restuarant.info.id} resList={restuarant} />     
})}
            </div>
        </div>
    )
}

export default Body;