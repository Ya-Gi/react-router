import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import { Faq } from "./pages/Help/Faq";
import { Contact,contactAction } from "./pages/Help/Contact";
import { Users,usersLoader } from "./pages/Users"
import { UserDetails, userDetailsLoader } from "./pages/Userdetails"




import { Mainlayout } from "./layout/MainLayout";
import { HelpLayout } from "./layout/HelpLayout";
import { Notfound } from "./pages/Notfound";
import UsersError from "./pages/UsersError";
 
const router = createBrowserRouter([
  {
    path:"/",
    element: <Mainlayout />,
    children:[
      {path:"/", element:<Home/>},
      {path:"home", element:<Home/>},
      {path:"about", element:<About/>},
      {path:"help",element:<HelpLayout/>,
      children: [
        { path:"contact",element:<Contact/>, action:contactAction },
        { path:"faq",element:<Faq/> }
      ]
    },
    {path:"users", element:<Users/>, loader:usersLoader},
    {path:"users/:userid",element:<UserDetails/>, loader:userDetailsLoader, errorElement: <UsersError/>},
    { path:"*", element: <Notfound/>  }
    ]
  }
  
])

function App() {
  
  return (
       <RouterProvider router={ router } />
    );
}

export default App;
