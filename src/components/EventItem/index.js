import './index.css'

const EventItem = props => {
  const {eventDetails, onChangeStatus} = props
  const {imageUrl, name, location, registrationStatus} = eventDetails
  const onClickChangeStatus = () => {
    onChangeStatus(registrationStatus)
  }

  return (
    <li className="event-item">
      <button className="event-button" type="button">
        <img
          src={imageUrl}
          alt="event"
          className="event-img"
          onClick={onClickChangeStatus}
        />
      </button>
      <p className="event-name">{name}</p>
      <p className="location">{location}</p>
    </li>
  )
}

export default EventItem
