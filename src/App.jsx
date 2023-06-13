import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemlistcontainer/ItemListContainer";

function App() {
  return (
    <div>
      <h1
        style={{
          backgroundColor: " #2a7190 ",
          color: " #dde1da ",
          padding: "20px 20px",
          textAlign: "center",
          margin: "10px",
          borderRadius: ".5em",
          display: "flex",
          width: "450px",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Capsule Corp. Manga Store
      </h1>
      <Navbar />
      <ItemListContainer />
    </div>
  );
}

export default App;
