import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css';;


const Users = () => {
    const users= useLoaderData();


    return (
        <div>
           <p>total users :{users.length} </p> 
           <div className="container">
            {
                users.map((user) => <User user={user} key={user.id}></User>)
            }
           </div>
        </div>
    );
};

export default Users;