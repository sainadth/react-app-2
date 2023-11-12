import UserContainer from "./userContainer";

const NavLinks = () => {
  // console.log(user, logout);
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <ul
        style={{
          listStyle: "none",
          display: "flex",
          marginRight: "20rem",
        }}
      >
        <li
          style={{
            marginLeft: "10px",
          }}
        >
          <a href="">Home</a>
        </li>
        <li
          style={{
            marginLeft: "10px",
          }}
        >
          <a href="">About</a>
        </li>
      </ul>
      <UserContainer />
    </div>
  );
};

export default NavLinks;
