import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { products } from "../../productsMock";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let mangaSelect = products.filter(
      (product) => product.category === categoryName
    );

    const tarea = new Promise((resolve) => {
      resolve(categoryName ? mangaSelect : products);
    });
    tarea
      .then((res) => setItems(res))
      .catch((rej) => {
        console.log(rej);
      });
  }, [categoryName]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
