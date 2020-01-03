import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
<div>  
    <h1>info</h1>
      <p> My information is: {props.info}</p> 
</div>
);

const withAdminRights = (WrappedComponent) => {
    return (props) => (
        <div>
            <p>This is private info</p>
        {props.isAdmin && <WrappedComponent {...props} />}
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}
        </div>
    )    
};

const AdminInfo = withAdminRights(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info=" they all gonna die" />, document.getElementById('app')); 
ReactDOM.render(<AuthInfo isAuthenticated={false} info="Your new CD password is 1234"/>, document.getElementById('app')); 