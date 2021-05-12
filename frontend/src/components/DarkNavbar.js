import { Navbar } from "react-bootstrap";
import { FaArchive } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function DarkNavbar() {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand className="d-flex text-center" href="#home">
          <Link to="/" style={{ textDecoration: "none", color: "white" }}>
            <h1 className="px-4">
              <FaArchive className="mb-2" /> ExamVault
            </h1>
          </Link>
        </Navbar.Brand>
      </Navbar>
    </>
  );
}
