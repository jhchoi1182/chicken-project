import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Posts/Detail";
import Posts from "../pages/posts";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/"></Route>
        <Route path="/posts" element={<Posts />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default Router;
