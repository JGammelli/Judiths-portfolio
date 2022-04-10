import React from "react";
import Projects from "./Projects";

const data = [
  {
    title: "",
    img: {
      //img1: require("").default,
    },
    href: (
      <>
        <a
          href="https://felltree-interactive.itch.io/methuselah"
          target="_blank"
          rel="noreferrer"
          className="gameLink"
        ></a>
      </>
    ),
    information: "",
  },
];

class ProjectInfo extends React.Component {
  render() {
    return data.map((project, index) => (
      <Projects
        key={index}
        title={project.title}
        information={project.information}
        href={project.href}
        img={project.img}
      />
    ));
  }
}

export default ProjectInfo;
