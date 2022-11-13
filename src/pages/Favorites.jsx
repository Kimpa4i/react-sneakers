import Card from "../components/Card";
import React from "react";
import AppContext from "../context";

export default function Favorites() {
  const { favorites, onFavorites } = React.useContext(AppContext);
  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between ">
        <h1>Мои закладки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {favorites.map((item, index) => (
          <Card
            key={index}
            {...item}
            favorited={true}
            onFavorite={onFavorites}
          />
        ))}
      </div>
    </div>
  );
}
