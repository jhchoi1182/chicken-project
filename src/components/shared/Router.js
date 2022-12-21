import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Login from "../../components/pages/Login";
import Todos from "../../components/pages/Todos";
import Neighborhood from "../../components/pages/Neighborhood";
import Posts from "../pages/Posts";
import Detail from "../pages/Detail";
import SignUp from "../pages/SignUp";
import PostDetail from "../pages/PostDetail";
const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/post/:id" element={<Posts />} />
          {/* <Route path="/post_detail/:id" element={<PostDetail />} /> */}
          <Route path="/neighborhood" element={<Neighborhood />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
