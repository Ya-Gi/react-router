import { useLoaderData,Link } from "react-router-dom";

export const UserDetails = () => {
     const user = useLoaderData();
  return(
        <div className="user-details">
           <h3>
                <i className="fa-solid fa-caret-right"></i> {user.name}
           </h3>
            <ul>
                <li>{user.username}</li>
                <li>{user.username}</li>
                <li>{user.phone}</li>
                <li>{user.company.name}</li>
            </ul>
            <Link to="/users">Back to list</Link>
        </div>
        );
}
export const userDetailsLoader = async ({params}) => {
    const {userid} = params;
    const res =await fetch("https://jsonplaceholder.typicode.com/users/"+ userid);
    
    if(res.status===404) {
        throw new Response ("Kaynak Bulunamadı", {status: 404});
    }

    return res.json();
}