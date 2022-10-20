import React from "react";
import "macro-css";
import Card from "./components/Card";
import Header from "./components/Header";
import Drawer from "./components/Drawer";

const arr = [];

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    fetch("https://634c3bf5acb391d34a81a79d.mockapi.io/items")
      .then(res => {
        return res.json();
      })
      .then(json => {
        setItems(json);
      });
  }, []);

  const onAddToCart = obj => {
    setCartItems(prev => [...prev, obj]);
  };

  //   const [first, setfirst] = React.useState(3);

  //   const minus = () => {
  //   setfirst(first - 1)
  //   }

  //   const plus = () => {
  //     setfirst(first + 1)
  //   }

  return (
    <div className="wrapper clear">
      {/* // <center>
//   <h1>{first}</h1>
//   <button onClick={plus}>+</button>
//   <button onClick={minus}>-</button>
// </center> */}

      {cartOpened ? (
        <Drawer items={cartItems} onClose={() => setCartOpened(false)} />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content p-40">
        <div className="d-flex mb-40 justify-between ">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search"></img>
            <input placeholder="Поиск"></input>
          </div>
        </div>
        <div className="d-flex flex-wrap">
          {items.map(item => (
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onFavorite={() => console.log("Добавили в закладки")}
              onPlus={obj => onAddToCart(obj)}
            />
          ))}
          ;
        </div>
      </div>
    </div>
  );
}

export default App;
