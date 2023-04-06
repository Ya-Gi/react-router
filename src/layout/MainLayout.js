import { NavLink, Outlet, useNavigation } from "react-router-dom";
import Loading from "../pages/Loading";



export const Mainlayout = () => {
    const navigation = useNavigation();
    return(
        <div> 
            <header className="container"> 
                <h1>React Router</h1>      
                <nav>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/help">Help</NavLink>
                    <NavLink to="/users">Users</NavLink>

                </nav>
             </header>
             <main className="container">
                {navigation.state ==="loading" && <Loading/>}
               
               <Outlet />   
             </main> 
       </div>

    );
} 