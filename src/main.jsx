import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";


import App from './App.jsx'
import Login from './Login.jsx'
import Signup from './Signup.jsx'
import Message from './Message.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Message />
//   </StrictMode>,
// )

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div className='text-white'>Hello World</div>,
//   },
// ]);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/Signup/",
    element: <Signup/>
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)

