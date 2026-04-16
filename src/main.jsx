import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router"
import App from "./components/app/App.jsx"
import { Main, Channel, VideoDetail, Search } from "./components/index.js" // ← shu o'zgardi

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Main /> },
      { path: "channel/:id", element: <Channel /> },
      { path: "video/:id", element: <VideoDetail /> },
      { path: "search/:id", element: <Search /> },
    ],
  },
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)