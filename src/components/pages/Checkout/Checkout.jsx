import { Button, TextField } from "@mui/material";
import style from "../Checkout/Checkout.module.css";

const Checkout = ({ handleSubmit, handleChange, errors }) => {
  return (
    <div className={style.check}>
      <h1>Ingrese sus datos para finalizar la compra</h1>
      <form onSubmit={handleSubmit} className={style.form}>
        <TextField
          label="name"
          variant="outlined"
          name="name"
          onChange={handleChange}
          error={errors.name ? true : false}
          helperText={errors.name}
        />
        <TextField
          label="email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          error={errors.email ? true : false}
          helperText={errors.email}
        />
        <TextField
          label="phone"
          variant="outlined"
          name="phone"
          onChange={handleChange}
          error={errors.phone ? true : false}
          helperText={errors.phone}
        />
        <Button type="submit" variant="contained">
          Enviar Datos
        </Button>
      </form>
    </div>
  );
};

export default Checkout;
