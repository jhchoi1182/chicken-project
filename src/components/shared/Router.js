import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from '../../components/pages/Login'
import Todos from '../../components/pages/Todos'
import Comments from '../../components/pages/Comments'
import Neighborhood from '../../components/pages/Neighborhood'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/todos" element={<Todos />} />
          <Route path="/comments" element={<Comments />} />
          <Route path="/neighborhood" element={<Neighborhood />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router