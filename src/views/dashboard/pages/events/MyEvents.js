import "./MyEvents.css"
import MyEvent from "./MyEvent";
import React, { useState, useEffect } from "react";
import axios from "axios";

const MyEvents = () => {

    const [eventData, setEventData] = useState([])

    useEffect(() => {
        axios.get("http://localhost:3001/fakeEvents")
            .then((result) => setEventData(result.data))
            .catch((error) => console.log(error))
    }, [])

    return (

            <div className="my-events-container">
                <div className="my-events-header">
                    <div className="my-events-header-filter">
                        <div>
                            <p>Filter by date: </p>
                            <input type="date" id="filter-date"/>
                        </div>
                        <div>
                            <p>Search Events</p>
                            <input type="search" id="filter-search"/>
                        </div>
                    </div>


                            <button>Create Events</button>
                </div>
                <div className="my-events-cards">
                        {eventData.length > 0
                            ? eventData.map((event) => <MyEvent event={event}/>)
                        : <h5 style={{ textAlign: 'center' }}>No Event</h5>}
                    </div>
        </div>

)
}


export default MyEvents