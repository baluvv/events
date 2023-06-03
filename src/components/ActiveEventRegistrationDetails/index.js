import './index.css'

const ActiveEventRegistrationDetails = props => {
  const {status} = props

  const statusConstants = {
    noActive: 'NO_ACTIVE',
    yetToRegister: 'YET_TO_REGISTER',
    registered: 'REGISTERED',
    registrationsClosed: 'REGISTRATIONS_CLOSED',
  }

  const renderNoActiveDetails = () => (
    <div className="no-view-container">
      <p className="no-view-details">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  const renderYetToRegister = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="register-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button className="button" type="button">
        Register Here
      </button>
    </div>
  )

  const renderRegistered = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png "
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  const renderRegistrationClosed = () => (
    <div className="result-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="register-img"
      />
      <h1 className="registered-heading">Registrations Are Closed Now!</h1>
      <p className="registration-open-soon">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  switch (status) {
    case statusConstants.noActive:
      return renderNoActiveDetails()
    case statusConstants.yetToRegister:
      return renderYetToRegister()
    case statusConstants.registered:
      return renderRegistered()
    case statusConstants.registrationsClosed:
      return renderRegistrationClosed()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails
