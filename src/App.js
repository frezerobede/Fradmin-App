import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import  { List1, List2, List3,List4 } from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Product from "./pages/product/product";
import NewProduct from "./pages/New product/NewProduct";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const admin=true; 
// console.log(JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser.isAdmin)
  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Router>
        <Routes>
        <Route path="login" element={<Login />} />
          {
            admin && (
            <>
            
            <Route path="/">
            <Route index element={<Home />} />         
            <Route path="users">
              <Route index element={<List1 />} />
              <Route path=":userId" element={<List4 />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="products">
              <Route index element={<List2 />} />
              <Route path=":productId" element={<Product />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="newproduct" element={<List3/>}/>
              
            
          </Route>
          
          </>
          )}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
