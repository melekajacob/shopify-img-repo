import { useState } from "react";
import { Toast } from "./../utils/notifications";
import { Auth } from "aws-amplify";
import { Link, useHistory } from "react-router-dom";
import { Form, Button, Card } from "react-bootstrap";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: null, password: null });
  const history = useHistory();

  // Change component data when any form
  const inputChange = (input) => (event) => {
    setFormData({ ...formData, [input]: event.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await Auth.signIn(formData.email, formData.password);
      Toast("Success!!", "Login Successfully", "success");
      history.push("/");
    } catch (error) {
      Toast("Error!!", error.message, "danger");
    }
    setLoading(false);
  };

  return (
    <Card style={{ width: 500, padding: "40px" }}>
      <Form
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
        onSubmit={handleSubmit}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
          {" "}
          Sign in to an existing account
        </h1>
        <Form.Control
          className="my-2 roundedInput"
          label="Email"
          type="email"
          placeholder="Email"
          onChange={inputChange("email")}
        />
        <Form.Control
          className="my-2 roundedInput"
          label="Password"
          type="password"
          placeholder="Password"
          onChange={inputChange("password")}
        />
        <Button
          className="my-2"
          variant="outline-success"
          size="lg"
          type="submit"
          disabled={loading}
        >
          Login to Your Account
        </Button>
        <Link to="/signup">Make a new account &rarr;</Link>
      </Form>
    </Card>
  );
};

export default Login;
