import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {Provider} from "react-redux";

import {router} from "./router.tsx";
import {store} from "./Store/store.ts";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <Provider  store={store}>
          <RouterProvider router={router}/>
      </Provider>
  </StrictMode>,
)
