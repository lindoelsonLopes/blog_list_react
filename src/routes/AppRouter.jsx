import { createBrowserRouter } from 'react-router-dom'

import Home from '../pages/Home.jsx'
import About from '../pages/About.jsx'
import PostDetails from '../pages/PostDetails.jsx'

import App from '../App.jsx'


const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      { path: '/blog_list_react',
        element: <Home />
    },
    { path: '/about',
      element: <About />
    },
    {
        path: '/post/:postId',
        element: <PostDetails />
      },
      {
        path: '/:searchTerm?',
        element: <Home />
      } 
    ]
  }
])

export default router
