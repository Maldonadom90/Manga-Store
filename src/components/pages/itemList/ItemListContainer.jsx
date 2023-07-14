import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let mangaSelect = products.filter(
      (product) => product.category === categoryName
    );

    const task = new Promise((resolve) => {
      setTimeout(() => {
        resolve(categoryName ? mangaSelect : products);
      }, 2000);
    });
    task
      .then((res) => setItems(res))
      .catch((reject) => {
        console.log(reject);
      });
  }, [categoryName]);

  if (items.length === 0) {
    return (
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "10px",
          padding: "10px",
        }}
      >
        <RingLoader color="#36d7b7" size="300" />
      </div>
    );
  }

  return <ItemList items={items} />;
};

export default ItemListContainer;
