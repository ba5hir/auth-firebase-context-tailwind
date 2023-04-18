import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProviders";

const Home = () => {
  const user = useContext(AuthContext);
  return <div>This is Home {user && <span>{user.displayName}</span>}</div>;
};

export default Home;
