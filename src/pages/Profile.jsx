import React, { useEffect, useState, na } from "react";
import { getAuth } from "firebase/auth";
import { useNavigate, Link } from "react-router-dom";

function Profile() {
  // const [user, setUser] = useState(null);

  const [formData, setFormData] = useState({
    name: auth.currentUser.displayname,
    email: auth.currentUser.email,
  });

  const auth = getAuth();
  useEffect(() => {
    // console.log(auth.currentUser);
    // setUser(auth.currentUser);
  }, []);

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate("/");
  };
  // return user ? <h1>{user.displayName}</h1> : "Not Logged in";
  return (
    <div className="profile">
      <header className="profileHeader">
        <p className="pageHeader">My Profile</p>
        <button type="button" className="logOut" onClick={onLogout}>
          {" "}
          Logout
        </button>
      </header>
    </div>
  );
}

export default Profile;
