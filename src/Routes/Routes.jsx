import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "../Pages/Home";
import Layout from "../Layout/Layout";
import Allproducts from "../Pages/Allproducts";
import Myexports from "../Pages/Myexports";
import Myimports from "../Pages/Myimports";
import Addexports from "../Pages/Addexports";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProductDetails from "../Pages/ProductDetails";
import PrivateRoute from "../Privateroute/PrivateRoute";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader:()=>fetch('http://localhost:1000/latest-products'),
        
     
      },
      {
        path: "/allproducts",
        element: <Allproducts></Allproducts>,
        loader: ()=>fetch('http://localhost:1000/products'),
        
     
      },
      {
        path: "/myexports",
        element: <PrivateRoute><Myexports></Myexports></PrivateRoute>,
        
     
      },
      {
        path: "/myimports",
        element: <PrivateRoute><Myimports></Myimports></PrivateRoute>,
        
     
      },
      {
        path: "/addexports",
        element: <PrivateRoute><Addexports></Addexports></PrivateRoute>,
        
     
      },
      {
        path: "/products/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:1000/products/${params.id}`)
        
     
      },
      {
        path: "/login",
        element: <Login></Login>,
        
     
      },
      
      {
        path: "/register",
        element: <Register></Register>,
        
     
      },
      
      
    ],
  },
]);
