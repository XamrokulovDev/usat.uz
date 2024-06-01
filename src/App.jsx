import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { UserContext } from "./context/Context";
import RouterLayout from './layout/RouterLayout';
import Home from './Page/home/Home';
import { about, directions } from '../data/data';
import News from './Page/news/News';
import Foto from './Page/foto/Foto';
import NewsOpen from './Page/newsOpen/NewsOpen';
import axios from 'axios';

const App = () => {
  const [news, setNews] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://usatsite.pythonanywhere.com/api/v1/news/');
        setNews(response.data.results);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouterLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/news",
          element: <News />
        },
        {
          path: "/foto",
          element: <Foto />
        },
        {
          path: "/newsOpen/:id",
          element: <NewsOpen />
        }
      ]
    }
  ]);
  
  return (
    <UserContext.Provider value={{ about, directions, news }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  );
}

export default App;
