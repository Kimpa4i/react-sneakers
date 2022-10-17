function Drawer(props) {
    return(
        <div className='overlay'>
        <div className='drawer'>
        <h2 className='mb-30'>Корзина<img onClick={props.onClose} className='removeBtn cu-p' src='/img/btn-remove.svg' alt='remove'></img></h2>
        <div className='items flex'>
        <div className='cartItem d-flex align-center mb-20'>
          <div style={{backgroundImage: 'url(/img/snik/2.jpg)'}} className='cartItemImg'>
          </div>
          {/* <img className='mr-20' src='/img/snik/2.jpg' width={70} height={70} alt='Sneakers'></img> */}
              <div className='mr-20 flex'>
            <p className='mb-5'>Мужские Кроссовки Nike Air Max 270</p>
            <b>12 999 руб.</b>
              </div>
              <img  className='removeBtn' src='/img/btn-remove.svg' alt='remove'></img>
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
    );
}

export default Drawer;