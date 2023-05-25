import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: "black",
          color: "whitesmoke",
          padding: "20px 20px",
          textAlign: "center",
          margin: "10px",
          borderRadius: "2em",
        }}
      >
        Capsule Corp. Manga Store
      </h1>
      <Navbar />
      <ItemListContainer greeting={"Bienvenidos a la tienda online de manga"} />
    </div>
  );
}

export default App;
