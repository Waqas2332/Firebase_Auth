import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./Home.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <header>
        <h2 className="text-center text-white">
          Our authentication website offers reliable protection for your
          personal information and peace of mind with every login
        </h2>
        <div className="d-flex gap-2">
          <Link className="btn btn-dark" to="/register">
            Register
          </Link>
          <Link className="btn btn-light" to="/">
            Login
          </Link>
        </div>
      </header>
    </>
  );
};

export default Home;
