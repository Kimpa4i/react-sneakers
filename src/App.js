import 'macro-css';

function App() {
  return (
    <div className="wrapper clear">
<header className='d-flex justify-between align-center p-40'>
<div className="headerLeft">
<img className='mr-15' width={40} height={40} src="/img/logo.png"></img>
  <div className="headerInfo">
    <h3>REACT SNEAKERS</h3>
    <p className='opacity-5'>Магазин лучших кроссовок</p>
    </div>
    </div>
  <ul className="d-flex">
    <li className='mr-30'>
    <img className='mr-15' width={18} height={18} src="/img/cart.svg"></img>
      <span>1205 руб.</span>
    </li>
    <li>
    <img width={18} height={18} src="/img/user.svg"></img>
    </li>
  </ul>
</header>
<div className="content p-40">
  <h1 className='mb-40'>Все кроссовки</h1>
  <div className='d-flex'>
  <div className='card'>
    <img width={133} height={112} src='/img/snik/1.jpg'></img>
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
    <img width={133} height={112} src='/img/snik/2.jpg'></img>
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
    <img width={133} height={112} src='/img/snik/3.jpg'></img>
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

    <img width={133} height={112} src='/img/snik/4.jpg'></img>
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

