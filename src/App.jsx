import Layout from "./components/layout/Layout";
import ItemDetailContainer from "./components/pages/itemDetail/itemDetailContainer";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/category/:categoryName"
              element={<ItemListContainer />}
            />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
          </Route>
          <Route path="*" element={<h1>404 not route</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
