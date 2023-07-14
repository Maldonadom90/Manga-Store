import ItemDetail from "./ItemDetail";
import { products } from "../../productsMock";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { RingLoader } from "react-spinners";
import Swal from "sweetalert2";

const ItemDetailContainer = () => {
  const [productSelect, setProductSelect] = useState({});
  const { addToCart, getTotalQuantityById } = useContext(CartContext);
  const { id } = useParams();

  const amount = getTotalQuantityById(id); //cantidad = amount
  const onAdd = (cantidad) => {
    let data = {
      ...productSelect,
      quantity: cantidad,
    };

    addToCart(data);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Agregado a su lista de compra",
      showConfirmButton: true,
      timer: 2000,
    });
  };

  useEffect(() => {
    let productFind = products.find((product) => product.id === +id);

    const getProduct = new Promise((res) => {
      setTimeout(() => {
        res(productFind);
      }, 500);
    });

    getProduct
      .then((res) => setProductSelect(res))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      {productSelect.id ? (
        <ItemDetail
          productSelect={productSelect}
          amount={amount}
          addToCart={addToCart}
          onAdd={onAdd}
        />
      ) : (
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
          <RingLoader color="#36d7b7" size="200" />
        </div>
      )}
    </div>
  );
};

export default ItemDetailContainer;
