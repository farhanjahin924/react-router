import { Link } from "react-router-dom";

const User = ({user}) => {
    const {id, name, email ,username} = user;
    const userStyle ={
        border : '2px solid black',
        margin : "5px"
    }
    return (
        <div style={userStyle}>
            <h4>ID: {id} </h4>
            <h3>UserName : {username}</h3>
            {/* <h4>Name : {name}</h4>
            <h4>Email : {email}</h4> */}
            <Link to={`/users/${id}`} >Shoe more</Link>


        </div>
    );
};

export default User;