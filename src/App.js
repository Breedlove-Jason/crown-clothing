import "./components/category-menu/categories.menu.style.scss";
import Home from "./routes/home/home.component";
import { Outlet, Route, Routes } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <div>
        <h1>Navigation Component</h1>
      </div>
      <Outlet />
    </div>
  );
};

const Shop = () => {
  return <h1>I am the shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route path="home" element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
