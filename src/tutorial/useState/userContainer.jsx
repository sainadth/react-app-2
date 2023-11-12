import { useContext } from "react";
import { useNavbarContext } from "./navbar";

// console.log(NavbarContext);
const UserContainer = () => {
  const { user, logout } = useNavbarContext();
  return (
    <div>
      {user ? (
        <div>
          <label htmlFor="">{user.name}</label>
          <button
            style={{
              margin: "0 0 0 1rem",
            }}
            onClick={logout}
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <button
            style={{
              margin: "0 0 0 1rem",
            }}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};

export default UserContainer;
