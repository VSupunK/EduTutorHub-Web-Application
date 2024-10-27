import './App.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import Tutorials from './pages/Tutorials'
import Library from './pages/Library'
import Events from './pages/Events'
import Enrollment from './pages/Enrollment'
import About from './pages/About'
import Login from './pages/Login'

function App() {

  return (
    <>
      <div>
        <NavBar />
        <Outlet />
      </div>
    </>
  )
}

const appRouter = createBrowserRouter ([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/tutorials',
        element: <Tutorials />,
      },
      {
        path: '/elibrary',
        element: <Library />,
      },
      {
        path: '/enrollment',
        element: <Enrollment />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider
    router={appRouter}
  />
)

export default App
