import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Register from './pages/Register.jsx';
import Post from './pages/Post.jsx';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import '../src/style.scss';

const Layout = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/post",
        element: <Post />,
      }
    ]
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="app">
      <div className="container">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>,
)
