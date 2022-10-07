import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
      <div className='overlay'>
      <div className='drawer'>
        <h2 className='mb-30'>Корзина<img className='removeBtn cu-p' src='/img/btn-remove.svg' alt='remove'></img></h2>
        <div className='items flex'>
        <div className='cartItem d-flex align-center mb-20'>
          <div style={{backgroundImage: 'url(/img/snik/2.jpg)'}} className='cartItemImg'>
          </div>
          {/* <img className='mr-20' src='/img/snik/2.jpg' width={70} height={70} alt='Sneakers'></img> */}
              <div className='mr-20 flex'>
            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'></img>
        </div>

        <div className='cartItem d-flex align-center mb-20'>
          <div style={{backgroundImage: 'url(/img/snik/2.jpg)'}} className='cartItemImg'>
          </div>
          {/* <img className='mr-20' src='/img/snik/2.jpg' width={70} height={70} alt='Sneakers'></img> */}
              <div className='mr-20 flex'>
            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
              </div>
              <img className='removeBtn' src='/img/btn-remove.svg' alt='remove'></img>
        </div>
        </div>
        <div className='cartTotalBlock'>
        <ul>
          <li>
            <span>Итого: </span>
            <div></div>
            <b>21 498 руб. </b>
          </li>
          <li className='d-flex'>
            <span>Налог 5%: </span>
            <div></div>
            <b>1074 руб. </b>
          </li>
        </ul>
        <button className='greenButton'>Оформить заказ<img src='/img/arrow.svg' alt='Arrow'></img></button>
        </div>
        
      </div>
      </div>




<header className='d-flex justify-between align-center p-40'>
<div className="headerLeft">
<img className='mr-15' width={40} height={40} src="/img/logo.png" alt='Logo'></img>
  <div className="headerInfo">
    <h3>REACT SNEAKERS</h3>
    <p className='opacity-5'>Магазин лучших кроссовок</p>
    </div>
    </div>
  <ul className="d-flex">
    <li className='mr-30'>
    <img className='mr-15' width={18} height={18} alt='Cart'  src="/img/cart.svg"></img>
      <span>1205 руб.</span>
    </li>
    <li>
    <img width={18} height={18} src="/img/user.svg" alt='User'></img>
    </li>
  </ul>
</header>
<div className="content p-40">
  <div className='d-flex mb-40 justify-between '>
  <h1>Все кроссовки</h1>
<div className='search-block d-flex'>
<img src='/img/search.svg' alt='Search'></img>
<input placeholder='Поиск'></input>
</div>
  </div>
  <div className='d-flex'>
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

  <div className='card'>
    <img width={133} height={112} src='/img/snik/2.jpg' alt='Sneakers'></img>
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column'>
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className='button'><img width={11} height={11} alt='button' src='/img/plus.svg'></img></button>
    </div>
  </div>

  <div className='card'>
    <img width={133} height={112} src='/img/snik/3.jpg' alt='Sneakers'></img>
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column'>
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className='button'><img width={11} height={11} alt='button' src='/img/plus.svg'></img></button>
    </div>
  </div>
  <div className='card'>

    <img width={133} height={112} src='/img/snik/4.jpg' alt='Sneakers'></img>
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column'>
        <span>Цена:</span>
        <b>12 999 руб.</b>
      </div>
      <button className='button'><img width={11} height={11} alt='button' src='/img/plus.svg'></img></button>
    </div>
  </div>
  </div>
</div>
    </div>
  );
}

export default App;

