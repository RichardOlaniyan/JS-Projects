import PropTypes from 'prop-types'

function Button(props){

    const styles = {
            backgroundColor: "hsl(0, 0%, 43%)",
            fontFamily: "'Inter' sans-serif",
            fontSize: "medium",
            color: "whitesmoke",
            padding: "10px 20px",
            borderRadius: "4px",
            border: "none",
            cursor: "pointer",
    }
    return(<button style={styles}>{props.name} {props.count}</button>);
}

Button.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
}

Button.defaultProps = {
    name: "Button Name"
}

export default Button