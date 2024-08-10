import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/Auth.context";
import axios from "axios";

const Profile = () => {
  const [profileUser, setProfileUser] = useState(null);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${user._id}`
        );
        console.log("here is the profile page data", data);
        setProfileUser(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchUserInfo();
  }, [user._id]);
  return (
    <div>
      <h2>{user.name}'s Profile</h2>
      <img src={profileUser?.profileImage} alt={user.name} />
    </div>
  );
};
export default Profile;
