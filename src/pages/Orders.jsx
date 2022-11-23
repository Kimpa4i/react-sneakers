import Card from "../components/Card";
import React from "react";
import axios from "axios";
import AppContext from "../context";

export default function Orders() {
  const [orders, setOrders] = React.useState([]);
  const { onFavorites, onAddToCart } = React.useContext(AppContext);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://634c3bf5acb391d34a81a79d.mockapi.io/orders"
        );
        // console.log(data.map(obj => obj.items).flat());
        // console.log(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert("error");
        console.error(error);
      }
    })();
  }, []);

  return (
    <div className="content p-40">
      <div className="d-flex mb-40 justify-between ">
        <h1>Мои покупки</h1>
      </div>
      <div className="d-flex flex-wrap">
        {(isLoading ? [...Array(12)] : orders).map((item, index) => (
          <Card key={index} {...item} loaded={isLoading} />
        ))}
      </div>
    </div>
  );
}
