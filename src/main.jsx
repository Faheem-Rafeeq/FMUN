import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout'
import Home from './screens/Home'
import About from './screens/About'
import Comittee from './screens/Comittee'
import Status from './screens/Status'
import Register from './screens/Register'
import Login from './screens/Login'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'committee',
        element: <Comittee />,
      },
      {
        path: 'status',
        element: <Status />,
      },
      {
        path: 'register',
        element: <Register />,
      },
      {
        path: 'login',
        element: <Login />,
      },
      {
        path: '*',
        element: <Home />,
      }
    ]
  },
])



createRoot(document.getElementById('root')).render(


<RouterProvider router={router} />


)