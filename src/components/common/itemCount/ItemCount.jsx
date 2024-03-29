import { useCount } from "../../hooks/useCount";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const { count, decrement, increment } = useCount(initial, stock);

  return (
    <>
      <div>
        <div>
          <button onClick={decrement}>-</button>
          <span>{count}</span>
          <button onClick={increment}>+</button>
        </div>
        <button onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </>
  );
};
