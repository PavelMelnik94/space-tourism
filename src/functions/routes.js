import NotFound from "../pages/NotFound";
import Home from "./Pages/Home";


export const routes = [
  {path: '/', exact: true, element: Home},
  {path: '/destination', exact: true, element: Home},
  {path: '/crew', exact: true, element: Home},
  {path: '/technology', exact: true, element: Home},
  {path: '*',  element: NotFound},
]