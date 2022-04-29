import React, { useState } from "react";


const LogoutButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>Logout</button>
)
const LoginButton = (props) => (
  <button onClick={props.toggleIsLoggedIn}>Login</button>
)

const LoginControl = () => {
  const [loginState, setLoginState] = useState(false);
  const toggleIsLoggedIn = () => {
    setLoginState(!loginState);
  }
  if (loginState) {
    return < LogoutButton toggleIsLoggedIn={toggleIsLoggedIn} />
  }
  return <LoginButton toggleIsLoggedIn={toggleIsLoggedIn} />
};

export default function App() {
  return <LoginControl />
}