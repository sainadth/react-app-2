import { useState } from "react";

const LoginToggle = () => {
  const [user, setUser] = useState();

  const handleLogin = () => {
    setUser("san");
  };

  const handleLogout = () => {
    setUser();
  };
  return (
    <div>
      {user ? (
        <div>
          <h4>Hello there {user}</h4>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h4>Please Login</h4>
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginToggle;
