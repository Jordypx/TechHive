import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="logins">
      <div className="login-title">
        <Link to="/">
          <h1 className="login-Text">AudioZone</h1>
        </Link>
      </div>

      <div className="login-container mt-16">
         <h1 className="text-2xl font-semibold">Sign-in</h1>

         <form>
            {/* <label htmlFor="E-mail">E-mail</label> */}
            <h5>E-mail</h5>
            <input type="text"/>

            {/* <label htmlFor="password">Password</label> */}
            <h5>Password</h5>
            <input type="password" />

            <button className="signInButton">Sign In</button>
         </form>

        <p>
           Sign-In to your account to get access to other features available and remember to scroll through our latest devices.
        </p>

        <button className="registerButton">Create New Account</button>

      </div>
    </div>
  );
};

export default LoginPage;
