import { NavLink, Outlet } from "react-router-dom";


export const HelpLayout = () => {
    return(
       <div className="help-layout">
        <h2>Help</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit aliquid fugiat incidunt provident cupiditate, ab recusandae magnam doloremque nesciunt iusto dolore quis odio ducimus id obcaecati sunt et assumenda quasi?</p>
        
        <nav>
            <NavLink to="contact">contact</NavLink>
            <NavLink to="faq">faq</NavLink>
        </nav>
        <Outlet/>
       </div>
    );
}