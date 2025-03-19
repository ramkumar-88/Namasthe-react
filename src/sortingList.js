import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom/client";

const SortingList = () => {

    const [data,setData] = useState([{id:1,name:"test2",votes:2,date:"2010-10-11"},
        {id:2,name:"test5",votes:5,date:"2010-10-22"},
        {id:3,name:"test8",votes:8,date:"2010-10-25"}
    ]);

    const sortByVotes = () => {
        const sortedByVotes = [...data].sort((a,b) => (b.votes - a.votes));
        setData(sortedByVotes);
    }
    const sortByDate = () => {
        const sortedByDate = [...data].sort((a,b)=>(new Date(b.date) - new Date(a.date)));
        setData(sortedByDate);
    }
    return (
        <div>
            <button onClick={sortByVotes}>sort by votes</button><button onClick={sortByDate}>sort by date</button>
            Data List
            {console.log(data)}
            {data.map((dat)=>(
                <div key={dat.id}>{dat.name}{" "}{dat.votes}{" "}{dat.date}</div>
            ))}
        </div>
    );
}
export default SortingList;