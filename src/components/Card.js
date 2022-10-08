
function Card() {
    return(
    <div className='card'>
        <div className='favorite'>
        <img src='/img/heart-unlike.svg' alt='unliked'/>
        </div>
        <img width={133} height={112} src='/img/snik/1.jpg' alt='Sneakers'></img>
        <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
        <div className='d-flex justify-between align-center'>
        <div className='d-flex flex-column'>
            <span>Цена:</span>
            <b>12 999 руб.</b>
        </div>
        <button className='button'><img width={11} height={11} alt='button' src='/img/plus.svg'></img></button>
        </div>
    </div>
    );
}

export default Card;
