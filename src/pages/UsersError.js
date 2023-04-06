import { useRouteError,Link } from "react-router-dom";

export default function UsersError() {
    const error = useRouteError();
    console.log(error.data);
    return(
        <div>
             <h2>Error</h2>
             <p>{error.data}</p>
             <Link to="/">Homepage</Link>
        </div>
    );
}

