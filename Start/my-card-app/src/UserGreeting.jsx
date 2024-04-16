import PropTypes from 'prop-types'

function Usergreeting(props){

    const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>

    return (props.isLoggedIn ? welcomeMessage : loginPrompt)

}

Usergreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}

Usergreeting.defaultProps = {
    username: "Guest",
    isLoggedIn: false,
}

export default Usergreeting