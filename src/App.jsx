import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MasterLayout from './MasterLayout/MasterLayout';
import About from './About/About';
import Product from './Skills/Skills'
import Home from './Home/Home';
import Skills from './Skills/Skills';
import Experience from './Experience/Experience'
import Work from './Work/Work'


const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<MasterLayout/>,
      
      children:[
        
        {index:true,element:<Home/>},
        {path:'/home',element:<Home/>},
        {path:'/about',element:<About/>},
        {path:'/skills',element:<Skills/>},
        {path:'/experience',element:<Experience/>},
        {path:'/work',element:<Work/>},
        {path:'/*',element:<h1>error</h1>}
      ]
    }
  ]
)
function App() {
  return (
    <RouterProvider  router={router} />
      
    
  )
}
export default App;
