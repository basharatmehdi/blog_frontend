import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import PostDetails from "./components/PostDetails";

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<h1>About</h1>} />
          <Route path="/contact" element={<h1>Contact</h1>} />
          <Route path="/portfolio" element={<h1>Portfolio</h1>} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
