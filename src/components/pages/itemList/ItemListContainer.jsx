import { useState, useEffect } from "react";
import { ItemList } from "./ItemList";
import { useParams } from "react-router-dom";
import { RingLoader } from "react-spinners";
import { dataBase } from "../../../FireBaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { categoryName } = useParams();

  useEffect(() => {
    let itemCollection = collection(dataBase, "products");
    let quest;
    if (!categoryName) {
      quest = itemCollection;
    } else {
      quest = query(itemCollection, where("category", "==", categoryName));
    }
    getDocs(quest)
      .then((res) => {
        let products = res.docs.map((element) => {
          return {
            ...element.data(),
            id: element.id,
          };
        });
        setItems(products);
      })
      .catch((err) => console.log(err));
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
