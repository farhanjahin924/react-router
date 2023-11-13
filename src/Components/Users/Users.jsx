import { useLoaderData } from "react-router-dom";


const Users = () => {
    const users= useLoaderData();

    return (
        <div>
           <p>total users :{users.length} </p> 
        </div>
    );
};

export default Users;