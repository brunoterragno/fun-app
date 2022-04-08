import { useState } from "react";

const Login = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <input type="text" placeholder="Name" />
      <input type="password" placeholder="Pass" />
      <button onClick={(e) => setIsClicked(true)}>Log</button>

      {isClicked && <p>Logged!</p>}
    </>
  );
};

export default Login;
