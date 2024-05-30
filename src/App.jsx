import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import {UserContext} from "./context/Context"
import RouterLayout from './layout/RouterLayout'
import Home from './Page/home/Home'
import { about,directions} from '../data/data'
import News from './Page/news/News'
import Foto from './Page/foto/Foto'
import NotFound from './Page/notFound/NotFound'
import NewsOpen from './Page/newsOpen/NewsOpen'
import { useState } from 'react'

const App = () => {

  const [state,setState]=useState([]);

  const router = createBrowserRouter([
    {
      path:"/",
      element:<RouterLayout/>,
      children: [
        {
          index: true,
          element:<Home/>
        },
        {
          path:"/news",
          element:<News/>
        },
        {
          path:"/foto",
          element:<Foto/>
        },
        {
          path:"/newsOpen",
          element:<NewsOpen state={state}/>
        },
        {
          path:"*",
          element:<NotFound/>
        }
      ]
    }
  ])
  return (
    <UserContext.Provider value={{about,directions,setState}}>
      <RouterProvider router={router}/>
    </UserContext.Provider>
  )
}

export default App
