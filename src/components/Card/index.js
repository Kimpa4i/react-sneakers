import React from "react";
import styles from "./Card.module.scss";
import ContentLoader from "react-content-loader";
import AppContext from "../../context";

function Card({
  id,
  onFavorite,
  imageUrl,
  title,
  price,
  onPlus,
  favorited = false,
  added = false,
  loaded = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  // const [isAdded, setAdded] = React.useState(added);

  const [isfavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({ id, parentId: id, imageUrl, title, price });
  };

  const onClickFavorite = () => {
    onFavorite({ id, parentId: id, imageUrl, title, price });
    setIsFavorite(!isfavorite);
  };

  return (
    <div className={styles.card}>
      {loaded ? (
        <ContentLoader
          speed={2}
          width={150}
          height={200}
          viewBox="0 0 150 200"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
          // {...props}
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="91" />
          <rect x="0" y="108" rx="3" ry="3" width="150" height="15" />
          <rect x="0" y="135" rx="3" ry="3" width="93" height="15" />
          <rect x="0" y="169" rx="8" ry="8" width="80" height="24" />
          <rect x="114" y="162" rx="8" ry="8" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          {onFavorite && (
            <div className={styles.favorite} onClick={onClickFavorite}>
              <img
                src={isfavorite ? "img/heart-like.svg" : "img/heart-unlike.svg"}
                alt="unliked"
              />
            </div>
          )}
          <img width={133} height={112} src={imageUrl} alt="Sneakers"></img>
          <h5>{title}</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>{price} руб.</b>
            </div>
            {onPlus && (
              <img
                className={styles.plus}
                onClick={onClickPlus}
                alt="button"
                src={
                  isItemAdded(id) ? "img/btn-checked.svg" : "img/btn-plus.svg"
                }
              ></img>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
