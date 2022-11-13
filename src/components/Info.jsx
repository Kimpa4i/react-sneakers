import AppContext from "../context";
import React from "react";

const Info = ({ title, description, image }) => {
  const { setCartOpened } = React.useContext(AppContext);

  return (
    <div className="cartEmpty d-flex flex-column justify-center align-center flex  ">
      <img width={120} height={120} src={image} alt="emptyCart"></img>
      <h2>{title}</h2>
      <p className="opacity-4">{description}</p>
      <button onClick={() => setCartOpened(false)} className="greenButton">
        <img src="/img/arrow.svg" alt="Arrow"></img>
        Вернуться назад
      </button>
    </div>
  );
};
export default Info;
