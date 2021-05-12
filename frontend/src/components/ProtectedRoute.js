import React from "react";
import { Auth } from "aws-amplify";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component }) => {
  const [isAuthenticated, setLoggedIn] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      let user = null;

      try {
        user = await Auth.currentAuthenticatedUser();
        if (user) {
          setLoggedIn(true);
        } else {
          setLoggedIn(false);
        }
      } catch (e) {
        setLoggedIn(false);
      }
    })();
  });

  return (
    <Route
      render={(props) =>
        isAuthenticated ? (
          React.createElement(component)
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default ProtectedRoute;
