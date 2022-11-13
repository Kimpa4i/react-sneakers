import Info from "./Info";
import React from "react";
import AppContext from "../context";
import axios from "axios";

const delay = ms =>
  new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });

function Drawer({ items = [], onClose, onRemove }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);
  const { cartItems, setCartItems } = React.useContext(AppContext);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        "https://634c3bf5acb391d34a81a79d.mockapi.io/orders",
        { items: cartItems }
      );
      setOrderId(data.id);
      setIsOrderComplete(true); //заказ создан то true
      setCartItems([]); //очищаю state в drawer
      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          `https://634c3bf5acb391d34a81a79d.mockapi.io/cart/` + item.id
        );
        await delay(1000);
      }
    } catch (err) {
      alert("error");
    }
    setIsLoading(false);
  };

  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина
          <img
            onClick={onClose}
            className="removeBtn cu-p"
            src="/img/btn-remove.svg"
            alt="remove"
          ></img>
        </h2>

        {items.length > 0 ? (
          <div className="items flex flex-column">
            <div className="items flex">
              {items.map(obj => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div
                    style={{ backgroundImage: `url(${obj.imageUrl})` }}
                    className="cartItemImg"
                  ></div>
                  {/* <img className='mr-20' src='/img/snik/2.jpg' width={70} height={70} alt='Sneakers'></img> */}
                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} руб.</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="/img/btn-remove.svg"
                    alt="remove"
                  ></img>
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Итого: </span>
                  <div></div>
                  <b>21 498 руб. </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>1074 руб. </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ<img src="/img/arrow.svg" alt="Arrow"></img>
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? "Заказ оформлен!" : "Корзина пустая"}
            description={
              isOrderComplete
                ? `Ваш заказ #${orderId} скоро будет передан курьерской доставке`
                : "Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
            }
            image={
              isOrderComplete
                ? "/img/complite-order.svg"
                : "/img/empty-cart.svg"
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
