import React from "react";
import "macro-css";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");
  React.useEffect(() => {
    // fetch("https://634c3bf5acb391d34a81a79d.mockapi.io/items")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     setItems(json);
    //   });
    // axios.get("https://634c3bf5acb391d34a81a79d.mockapi.io/items")
    // .then(res => {
    //   setItems(res.data);
    // })
    // axios.get("https://634c3bf5acb391d34a81a79d.mockapi.io/cart")
    // .then(res => {
    //   setCartItems(res.data);
    // })
    // axios.get("https://634c3bf5acb391d34a81a79d.mockapi.io/favorites")
    // .then(res => {
    //   setFavorites(res.data);
    // })

    async function fetchData() {
      setIsLoading(true);

      const itemsResponse = await axios.get(
        "https://634c3bf5acb391d34a81a79d.mockapi.io/items"
      );

      const cartResponse = await axios.get(
        "https://634c3bf5acb391d34a81a79d.mockapi.io/cart"
      );

      const favoritesResponse = await axios.get(
        "https://634c3bf5acb391d34a81a79d.mockapi.io/favorites"
      );
      setIsLoading(false);
      setCartItems(cartResponse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
    }
    fetchData();
  }, []);

  const onAddToCart = obj => {
    if (cartItems.find(items => Number(items.id) === Number(obj.id))) {
      axios.delete(
        `https://634c3bf5acb391d34a81a79d.mockapi.io/cart/${obj.id}`
      );
      setCartItems(prev =>
        prev.filter(items => Number(items.id) !== Number(obj.id))
      );
    } else {
      axios.post("https://634c3bf5acb391d34a81a79d.mockapi.io/cart", obj);
      setCartItems(prev => [...prev, obj]);
    }
  };

  const onRemoveItem = id => {
    axios.delete(`https://634c3bf5acb391d34a81a79d.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const onFavorites = async obj => {
    try {
      if (favorites.find(favObj => favObj.id === obj.id)) {
        axios.delete(
          `https://634c3bf5acb391d34a81a79d.mockapi.io/favorites/${obj.id}`
        );
        setFavorites(prev => prev.filter(item => item.id !== obj.id));
      } else {
        const { data } = await axios.post(
          "https://634c3bf5acb391d34a81a79d.mockapi.io/favorites",
          obj
        );
        setFavorites(prev => [...prev, obj]);
      }
    } catch (error) {
      alert("error.message");
    }
  };

  const onChangeInput = event => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.id) === Number(id));
  };

  return (
    <AppContext.Provider
      value={{
        cartItems,
        favorites,
        items,
        isItemAdded,
        onFavorites,
        setCartOpened,
        setCartItems,
      }}
    >
      <div className="wrapper clear">
        {cartOpened ? (
          <Drawer
            items={cartItems}
            onClose={() => setCartOpened(false)}
            onRemove={onRemoveItem}
          />
        ) : null}
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path="/"
            element={
              <Home
                cartItems={cartItems}
                searchValue={searchValue}
                onChangeInput={onChangeInput}
                onFavorites={onFavorites}
                onAddToCart={onAddToCart}
                items={items}
                isLoading={isLoading}
              />
            }
          ></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
