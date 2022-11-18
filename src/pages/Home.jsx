import Card from "../components/Card";
import AppContext from "../context";
import React from "react";

export default function Home({
  items,
  onFavorites,
  onAddToCart,
  searchValue,
  setSearchValue,
  onChangeInput,
  isLoading,
}) {
  const renderItems = () => {
    const filterItem = items.filter(item =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    return (isLoading ? [...Array(10)] : filterItem).map((item, index) => (
      <Card
        key={index}
        {...item}
        onFavorite={obj => onFavorites(obj)}
        onPlus={obj => onAddToCart(obj)}
        loaded={isLoading}
      />
    ));
  };

  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between ">
        <h1>
          {searchValue ? `Поиск по запросу "${searchValue}"` : "Все кроссовки"}
        </h1>
        <div className="search-block d-flex">
          <img src="img/search.svg" alt="Search"></img>
          <input
            onChange={onChangeInput}
            value={searchValue}
            placeholder="Поиск"
          ></input>
          {searchValue && (
            <img
              onClick={() => setSearchValue("")}
              className="clean cu-p"
              src="img/btn-remove.svg"
              alt="clean"
            ></img>
          )}
        </div>
      </div>
      <div className="d-flex flex-wrap">{renderItems()}</div>
    </div>
  );
}
