import { Route } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <h1>The Welcome Page</h1>
      <Route path="/welcome/user"></Route>
    </>
  );
}

export default Welcome;
