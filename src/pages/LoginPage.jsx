import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <div className="login-title">
        <Link to="/">
          <h1 className="login-Text">AudioZone</h1>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
