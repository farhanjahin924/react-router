import { useLoaderData, useNavigate } from "react-router-dom";


const ShowDetails = () => {
    const details =useLoaderData();
    const nevigate = useNavigate();

    const {id, name, email ,username,address} = details;
    //here address is a object! how to fix this ?
    const { street, city, suite , zipcode } = address || {};
    const userStyle ={
        border : '2px solid black',
        margin : "5px"
    }
    const btnhandle = () =>{
        nevigate(`/users`) 
    }
    const testMinusOne = () =>{
        nevigate(-1)
    }
    return (
        <div style={userStyle}>
            <h1>User Details : </h1>
            <h4>ID: {id} </h4>
            <h3>UserName : {username}</h3>
            <h4>Name : {name}</h4>
            <h4>Email : {email}</h4>
            <h4>Address :</h4>
            <p>Street: {street}</p>
          <p>City: {city}</p>
          <p> {suite}</p>
          <p>Zip: {zipcode}</p>
          <button  onClick={btnhandle}>Go back</button>
          <button onClick={testMinusOne}>-1</button>
        </div>
    );
};

export default ShowDetails;