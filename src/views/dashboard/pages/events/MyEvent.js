import "./MyEvents.css"

const MyEvent = ({ event }) => {

    return (
        <div className="event-card">
            <div className="image-container"
            style={{ backgroundImage: 'url(https://images.pexels.com/photos/11071498/pexels-photo-11071498.jpeg?cs=srgb&dl=pexels-rizky-sabriansyah-11071498.jpg&fm=jpg)'}}>
            </div>
            <div className="event-details">
                <p>Event name</p>
                <h5>{event.title}</h5>
                <p>Event Description</p>
                <h5>{event.description}</h5>
            </div>
            <div className="events-actions">
                <button>View Details</button>
            </div>
        </div>
    )
}

export default MyEvent;