import "./App.css";

import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import AddQuestionButton from "./components/AddQuestionButton";
import QuestionsList from "./components/QuestionsList";

function App() {
  return (
    <Container fluid>
      <Container>
        <Row className="m-3">
          <Col className="col-md-12 text-center">
            <AddQuestionButton />
          </Col>
        </Row>
      </Container>

      <hr></hr>

      <QuestionsList />
    </Container>
  );
}

export default App;
