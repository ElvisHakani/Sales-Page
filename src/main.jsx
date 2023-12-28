import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './RoutesConvig.jsx'
import { TheUserProvider } from './context/TheUserContext.jsx'
import { SearchProvider } from './context/SearchContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <SearchProvider>
    <TheUserProvider>
      <RouterProvider router={router} />
    </TheUserProvider>
  </SearchProvider>
  // </React.StrictMode>,
)
