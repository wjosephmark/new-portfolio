import React from "react";
import ReactDOM from "react-dom";
import { useRoutes, A } from "hookrouter";

import App from "./components/app";
import Projects from "./pages/projects";
import AboutMe from "./pages/about-me";
import Resume from "./pages/resume";
import Contact from "./pages/contact"
import "./style/main.scss";

const routes = {
  "/": () => <App />,
  "/projects": () => <Projects />,
  "/about-me": () => <AboutMe />,
  "/resume": () => <Resume />,
  "/contact": () => <Contact />
}

function Main() {
  return(
    <div>
      {/* <div className="navbar">
        <A href="/">Home</A>
        <A href="/projects">Projects</A>
      </div> */}
      {useRoutes(routes)}
    </div>
    // null
  )
}

ReactDOM.render(<Main />, document.querySelector(".app-wrapper"));
