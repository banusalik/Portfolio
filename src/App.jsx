import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import "./App.css";
import AboutMe from "./AboutMe";
import Timeline from "./Timeline";
import ProjectDetails from "./ProjectDetails";
import Contact from "./Contact";
import Nav from "./components/Nav";

export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/about" element={<AboutMe />} />
      <Route exact path="/timeline" element={<Timeline />} />
      <Route exact path="/detail" element={<ProjectDetails />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/nav" element={<Nav />} />
    </Routes>
  );
}
