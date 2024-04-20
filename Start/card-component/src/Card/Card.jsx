import styles from './Card.module.css'

function Card(props){
    return(
        <>
            <div className={styles.wrap}>
            <img className={styles.image} src={props.link}alt='Card image'></img>
            <h2 className={styles.h2}>{props.title}</h2>
            <p className={styles.p}>{props.text}</p>
            <button className={styles.button}>Contact {props.title}</button>
            </div>
        </>
        
    );
}
export default Card