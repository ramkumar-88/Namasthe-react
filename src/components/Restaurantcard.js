import { CDN_URL } from "../utils/constants";
const Restaurantcard = (props) => {
    const {resList} = props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId} = resList?.info;
    const {deliveryTime} = resList?.info?.sla;
    const styleCard = {
        backgroundColor: "#f0f0f0",
    }

    return (
        <div className="res-card" style={styleCard}>
                <img className="res-logo"
                alt="res-logo"
               src = {CDN_URL + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default Restaurantcard;