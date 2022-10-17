import React from 'react';
import styles from './Card.module.scss';
console.log(styles);




function Card(props) {
const [isAdded, setAdded] = React.useState(false);

const onClickPlus = () => {
    setAdded(!isAdded);
}
    return(
    <div className={styles.card}>
        <div className={styles.favorite}>
        <img src='/img/heart-unlike.svg' alt='unliked' onClick={props.onFavorite}/>
        </div>
        <img width={133} height={112} src={props.imageUrl} alt='Sneakers'></img>
        <h5>{props.title}</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>{props.price} руб.</b>
        </div>
            <img className={styles.plus} onClick={onClickPlus} alt='button' src={isAdded ? '/img/btn-checked.svg' : '/img/btn-plus.svg'} ></img>
        </div>
    </div>
    );
}

export default Card;
