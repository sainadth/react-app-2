import React, { useContext, useState } from "react";
import NavLinks from "./navLinks";
export const NavbarContext = React.createContext();

export const useNavbarContext = () => useContext(NavbarContext);

console.log(NavbarContext);

const NavBar = () => {
  const [user, setUser] = useState(/* null */ { name: "san" });
  const logout = () => {
    setUser(null);
  };
  return (
    <NavbarContext.Provider value={{ user, logout }}>
      <div style={{ display: "flex" }}>
        CONTEXT API
        <NavLinks />
      </div>
    </NavbarContext.Provider>
  );
};

export default NavBar;
