import './Card-styles.css'
import navigationicon from './assets/navigationicon.svg'

function Card(props){
    return(
        <div className='user-card-wrap'>
            <div className={`user-profile-status user-profile-status-${props.user.status}`}/>
            {props.user.picture.medium ? 
            (<img 
                className='user-profile-avatar' 
                src={props.user.picture.medium} 
                alt={`Photo of ${props.user.name.first} ${props.user.name.last}`}/>) :
            (< Placeholder first={props.user.name.first} last={props.user.name.first}/>)
        }
            <h2 className='user-card-name'>{`${props.user.name.first} ${props.user.name.last}`}</h2>
            <div className='location-wrap'>
            <img className='user-location-icon'src={navigationicon}></img>
            <p className='user-card-location'>{`${props.user.location.city}`}</p>
            </div>
            <a className='user-card-number' src={props.user.email}>{`Contact ${props.user.name.first}`}</a>
        </div>
    );
}

const Placeholder = function(props) {
    const first = props.first.charAt(0).toUpperCase();
    const last = props.last.charAt(0).toUpperCase();
  
    return (
      <div className="user-profile-placeholder">{first + last}</div>
    )
}

export default Card