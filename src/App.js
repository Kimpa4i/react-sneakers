import React from "react";
import "macro-css";
import Header from "./components/Header";
import Drawer from "./components/Drawer";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import AppContext from "./context";
import Orders from "./pages/Orders";

function App() {
  const [cartItems, setCartItems] = React.useState([]);
  const [items, setItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);
  const [searchValue, setSearchValue] = React.useState("");

  console.log(cartItems);
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
      try {
        const [itemsResponse, cartResponse, favoritesResponse] =
          await Promise.all([
            axios.get("https://634c3bf5acb391d34a81a79d.mockapi.io/items"),
            axios.get("https://634c3bf5acb391d34a81a79d.mockapi.io/cart"),
            axios.get("https://634c3bf5acb391d34a81a79d.mockapi.io/favorites"),
          ]);
        setIsLoading(false);
        setCartItems(cartResponse.data);
        setFavorites(favoritesResponse.data);
        setItems(itemsResponse.data);
      } catch (error) {
        alert("ошибка при запросе данных");
      }
    }
    fetchData();
  }, []);

  const onAddToCart = async obj => {
    try {
      const findItem = cartItems.find(
        items => Number(items.parentId) === Number(obj.id)
      );
      if (findItem) {
        setCartItems(prev =>
          prev.filter(items => Number(items.parentId) !== Number(obj.id))
        );
        await axios.delete(
          `https://634c3bf5acb391d34a81a79d.mockapi.io/cart/${findItem.id}`
        );
      } else {
        setCartItems(prev => [...prev, obj]);
        const { data } = await axios.post(
          "https://634c3bf5acb391d34a81a79d.mockapi.io/cart",
          obj
        );
        setCartItems(prev =>
          prev.map(item => {
            if (item.parentId === data.parentId) {
              //если parentId из массива(который сейчас добавил) равен parent.id из бэка
              return {
                ...item, //все старые данные
                id: data.id,
              };
            }
            return item;
          })
        );
      }
    } catch (error) {
      alert("ошибка при добавлении корзины");
      console.error(error);
    }
  };

  const onRemoveItem = id => {
    try {
      axios.delete(`https://634c3bf5acb391d34a81a79d.mockapi.io/cart/${id}`);
      setCartItems(prev => prev.filter(item => item.id !== id));
    } catch (error) {
      alert("ошибка при удалении корзины");
      console.error(error);
    }
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
      alert("не удалось добавить в фавориты");
      console.error(error);
    }
  };

  const onChangeInput = event => {
    setSearchValue(event.target.value);
  };

  const isItemAdded = id => {
    return cartItems.some(obj => Number(obj.parentId) === Number(id));
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
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
          opened={cartOpened}
        />
        <Header onClickCart={() => setCartOpened(true)} />

        <Routes>
          <Route
            path=""
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
          <Route path="favorites" element={<Favorites />}></Route>
          <Route path="orders" element={<Orders />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
