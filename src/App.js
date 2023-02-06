import { Routes, Route } from "react-router-dom";
import Home from "./layouts/Home";
import Register from "./layouts/Register";

const App = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
