import Info from "../Info";
import React from "react";
import axios from "axios";
import { useCart } from "../../hooks/useCart";
import styles from "../Drawer/Drawer.module.scss";

const delay = ms =>
  new Promise(function (resolve) {
    setTimeout(resolve, ms);
  });

function Drawer({ items = [], onClose, onRemove, opened }) {
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const [orderId, setOrderId] = React.useState(null);

  const { totalPrice, cartItems, setCartItems } = useCart();

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
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ""}`}>
      {/* прикрутился класс overlayVisible если открыли карт */}
      <div className={styles.drawer}>
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
          <div className="items d-flex flex-column flex">
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
                  <b>{totalPrice} руб. </b>
                </li>
                <li className="d-flex">
                  <span>Налог 5%: </span>
                  <div></div>
                  <b>{totalPrice * 0.05} руб. </b>
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
