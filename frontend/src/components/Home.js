import AddQuestionButton from "./AddQuestionButton";
import QuestionsList from "./QuestionsList";
import { Container, Row, Col } from "react-bootstrap";
import { Auth } from "aws-amplify";
import { useEffect } from "react";
import { Toast } from "./utils/notifications";
import DarkNavbar from "./utils/DarkNavbar";

const Home = () => {
  return (
    <>
      <DarkNavbar />
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
    </>
  );
};

export default Home;
