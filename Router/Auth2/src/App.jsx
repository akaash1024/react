
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { AppLayout } from './layout/AppLayoyt'
import { ErrorPage } from './pages/ErrorPage'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Product } from './pages/Product'
import { Contact } from './pages/Contact'
import { Login } from './pages/Login'
import { Signup } from './pages/Signup'


import {getProduct} from './api/getProduct'
import { ProtectedRoute } from "./ProtectedRoute"
import { AuthProvider } from "./auth/AuthProvider"


const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/product',
        element: (
          <ProtectedRoute>
            <Product />
          </ProtectedRoute>
        ),
        loader: getProduct
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/signup',
        element: <Signup />
      }
    ]
  }
])


const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  )
}

export default App;
