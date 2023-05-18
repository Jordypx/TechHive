import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-title">
        <Link to="/">
          <h1 className="login-Text">AudioZone</h1>
        </Link>
      </div>

      <div className="login-container">
         <h2>Sign-in</h2>

         <form action="">
            <label htmlFor="E-mail">E-mail</label>
            <input type="email"/>

            <label htmlFor="password">Password</label>
            <input type="password" name="" />

            <button className="signInButton">Sign In</button>
         </form>

        <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit voluptas quam possimus harum? Inventore itaque nemo ducimus veritatis dolores sunt mollitia qui dicta laboriosam autem at enim eligendi reprehenderit possimus modi quae, eum repudiandae consequuntur? Tempore enim, error molestias mollitia inventore possimus, ex, ratione doloribus voluptatem quasi debitis. Odit, voluptatem!
        </p>

        <button className="registerButton">Create New Account</button>

      </div>
    </div>
  );
};

export default LoginPage;
