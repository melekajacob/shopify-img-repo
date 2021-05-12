import { useState } from "react";

import { Toast } from "./../utils/notifications";
import { Auth } from "aws-amplify";
import { Button, Form, Card } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: null,
    password: null,
    confirmPassword: null,
  });

  // Change component data when any form
  // TODO: Remove replication of this function
  const inputChange = (input) => (event) => {
    setFormData({ ...formData, [input]: event.target.value });
  };

  const history = useHistory();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.password !== formData.confirmPassword) {
      Toast(
        "Error!!",
        "Password and Confirm Password should be same",
        "danger"
      );
      return;
    }

    try {
      await Auth.signUp({
        username: formData.email,
        password: formData.password,
      });
      Toast("Success!!", "Signup was successful", "success");
      history.push("/");
    } catch (error) {
      console.error(error);
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
        onSubmit={handleSignUp}
      >
        <h1 style={{ fontSize: "22px", fontWeight: 800 }}>
          {" "}
          New Account Registration
        </h1>

        <Form.Control
          className="my-2 roundedInput"
          label="Email"
          type="email"
          placeholder="Email"
          onChange={inputChange("email")}
        />
        <Form.Control
          className="my- roundedInput"
          label="Password"
          type="password"
          placeholder="Password"
          onChange={inputChange("password")}
        />
        <Form.Control
          className="my-2 roundedInput"
          label="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          onChange={inputChange("confirmPassword")}
        />

        <Button
          className="my-2"
          variant="outline-success"
          size="lg"
          type="submit"
          disabled={loading}
        >
          Sign Up
        </Button>
        <Link to="/login">Already have an account? Login! &rarr;</Link>
      </Form>
    </Card>
  );
};

export default Signup;
