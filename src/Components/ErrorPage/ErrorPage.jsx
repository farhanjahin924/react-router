import React from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    const nevigate = useNavigate(); 
    const goback = () => {
        nevigate(-1)
    }
    return (
        <div>
            <p>OOps!!</p>
            {
                error.status === 404 && <div>   <h1> 404 Error!  </h1>
                 <button onClick={goback}> Go back</button>
                   </div> 
                
            }
            <h3>{error.statusText || error.message}</h3>
        </div>
    );
};

export default ErrorPage;