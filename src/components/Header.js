import { Link } from "react-router-dom";
import AppContext from "../context";
import React from "react";
import { useCart } from "../hooks/useCart";

function Header(props) {
  // const { cartItems } = React.useContext(AppContext);
  // const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="headerLeft">
          <img
            className="mr-15"
            width={40}
            height={40}
            src="img/logo.png"
            alt="Logo"
          ></img>
          <div className="headerInfo">
            <h3>REACT SNEAKERS</h3>
            <p className="opacity-5">Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img
            className="mr-15"
            width={18}
            height={18}
            alt="Корзина"
            src="img/cart.svg"
          ></img>
          <span>{totalPrice} руб.</span>
        </li>
        <li>
          <Link to="favorites">
            <img
              className="mr-20 cu-p"
              width={18}
              height={18}
              alt="Закладки"
              src="img/love.svg"
            ></img>
          </Link>
        </li>
        <Link to="orders">
          <li>
            <img
              width={18}
              height={18}
              src="img/user.svg"
              alt="Пользователь"
            ></img>
          </li>
        </Link>
      </ul>
    </header>
  );
}

export default Header;
