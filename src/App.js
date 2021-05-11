import Amplify from "aws-amplify";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { COGNITO } from "./configs/aws";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Authorization/Login";
import Signup from "./components/Authorization/Signup";
import ReactNotification from "react-notifications-component";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-notifications-component/dist/theme.css";
import "./App.css";

Amplify.configure({
  aws_cognito_region: COGNITO.REGION,
  aws_user_pools_id: COGNITO.USER_POOL_ID,
  aws_user_pools_web_client_id: COGNITO.APP_CLIENT_ID,
});

function App() {
  return (
    <>
      <ReactNotification />
      <Router>
        <Switch>
          <Route path="/signup">
            <Container
              style={{ minHeight: "100vh" }}
              className="d-flex align-items-center justify-content-center"
            >
              <Signup />
            </Container>
          </Route>
          <Route path="/login">
            <Container
              style={{ minHeight: "100vh" }}
              className="d-flex align-items-center justify-content-center"
            >
              <Login />
            </Container>
          </Route>
          <Route path="/" exact>
            <ProtectedRoute component={Home} />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
