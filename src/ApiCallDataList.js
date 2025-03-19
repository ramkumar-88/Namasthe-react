import React, {useEffect, useState} from "react";
import axios from 'axios';
import ReactDOM from "react-dom/client";

const ApiCallDataList = () => {
    const [data,setData] = useState([]);
    const [error,setError] = useState(null);

    useEffect (()=> {
        const fetchData = async() => {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/usersasdf");
                setData(response.data);
            } catch (err) {
                setError(err);
            }
        };
        fetchData();
    },[]);

    if (error) return <p>Error: {error.message}</p>;
    return (
        <div>
            Data List
            {console.log(data)}
            {data.map((dat)=>(
                <div>{dat.id}{dat.name}</div>
            ))}
        </div>
    );
}
export default ApiCallDataList;