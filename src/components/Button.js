import { useState } from "react";

const Button = () => {
  const [message, setMessage] = useState("Click!");

  function handleClick(e) {
    if (message === "Click!") {
      setMessage("Clicked!");
    } else {
      setMessage("Click!");
    }
  }

  return <button onClick={handleClick}>{message}</button>;
};

export default Button;
