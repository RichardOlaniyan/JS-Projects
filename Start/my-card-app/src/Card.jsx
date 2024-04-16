import profilepic from './assets/profilepic.avif'
function Card(){
    return(
        <div className="card">
            <img className="card-image" src={profilepic} alt="profile picture"></img>
            <h2 className="card-title">Rancho Roco</h2>
            <p className="card-description">I make people laugh</p>
        </div>
    )

}

export default Card