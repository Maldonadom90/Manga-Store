import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import style from "./CartWidget.module.css";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -2,
    top: 3,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export function CartWidget() {
  return (
    <IconButton aria-label="cart" className={style.cart}>
      <StyledBadge badgeContent={99} color="success">
        <ShoppingCartIcon color="error" />
      </StyledBadge>
    </IconButton>
  );
}
