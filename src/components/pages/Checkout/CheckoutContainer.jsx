import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { dataBase } from "../../../FireBaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import Swal from "sweetalert2";

const CheckoutContainer = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
    },

    onSubmit: (data) => {
      let order = {
        buyer: data,
        items: cart,
        total: total,
      };

      let ordersCollection = collection(dataBase, "orders");
      addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

      cart.forEach((product) => {
        updateDoc(doc(dataBase, "products", product.id), {
          stock: product.stock - product.quantity,
        });
      });

      clearCart();
    },

    validateOnChange: false,
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Información obligatoria")
        .min(3, "Debe contener al menos 3 caracteres"),
      email: Yup.string()
        .email("No corresponde a un email valido")
        .required("Información obligatoria"),
      phone: Yup.string()
        .required("Información obligatoria")
        .min(8, "El n° no existe"),
    }),
  });

  return (
    <div>
      {orderId ? (
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Compra realizada, el id de su comprobante es:" + `${orderId}`,
          showConfirmButton: true,
          timer: 3000,
        })
      ) : (
        <Checkout
          handleSubmit={handleSubmit}
          handleChange={handleChange}
          errors={errors}
        />
      )}
    </div>
  );
};

export default CheckoutContainer;
