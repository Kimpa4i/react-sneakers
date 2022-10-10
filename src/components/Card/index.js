import styles from './Card.module.scss';
console.log(styles);

function Card(props) {
    return(
    <div className={styles.card}>
        <div className={styles.favorite}>
        <img src='/img/heart-unlike.svg' alt='unliked'/>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt='Sneakers'></img>
        <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
        </div>
        <button className='button' onClick={()=>alert('Нажали кнопку')}>
            <img width={11} height={11} alt='button' src='/img/plus.svg'></img>
        </button>
        </div>
    </div>
    );
}

export default Card;
