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


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        
     
      },
      {
        path: "/allproducts",
        element: <Allproducts></Allproducts>,
        loader: ()=>fetch('http://localhost:1000/products'),
        
     
      },
      {
        path: "/myexports",
        element: <Myexports></Myexports>,
        
     
      },
      {
        path: "/myimports",
        element: <Myimports></Myimports>,
        
     
      },
      {
        path: "/addexports",
        element: <Addexports></Addexports>,
        
     
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
