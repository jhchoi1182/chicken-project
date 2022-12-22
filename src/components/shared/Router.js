import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import Login from '../../components/pages/Login'
import Todos from '../../components/pages/Todos'
import Neighborhood from '../../components/pages/Neighborhood'
import Posts from '../pages/Posts'
import SignUp from '../pages/SignUp'
import Main from '../pages/Main'

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route path='/'>
            <Route path=':id' element={<Main />} />
          </Route> */}
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/todos">
            <Route path=":id" element={<Todos />} />
          </Route>
          <Route path="/post/:id" element={<Posts />} />
          <Route path="/comments" element={<Posts />} />
          <Route path="/neighborhood">
            <Route path=':id' element={<Neighborhood />} />
          </Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default Router