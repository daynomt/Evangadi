import React, { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/UserContext";

function Home({ logout }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useContext(UserContext);
  useEffect(() => {
    if (!userData.user) navigate("/login");
  }, [userData.user, navigate]);
  const handleClick = () => {
    navigate("/asking");
  };

  return (
    <div>
      <h1>welcome {userData.user?.display_name}</h1>
      <button onClick={handleClick}>Ask question</button>
    </div>
  );
}

export default Home;
