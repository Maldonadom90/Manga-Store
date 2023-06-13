import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../productsMock";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const tarea = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 2000);
    });

    tarea
      .then((res) => setItems(res))
      .catch((rej) => {
        console.log(rej);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
