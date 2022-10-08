function Header() {
    return(
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
    );
}

export default Header;
