import { useContext } from "react";
import { AuthContext } from "../contexts/Auth.context";

const Navbar = () => {
  const { handleLogout, isLoggedIn } = useContext(AuthContext);

  return (
    <div>
      Navbar
      {isLoggedIn ? <button onClick={handleLogout}>Logout</button> : null}
    </div>
  );
};
export default Navbar;
