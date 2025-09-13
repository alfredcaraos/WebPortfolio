import React from "react";
import Img from "../components/Img";
import reactIcon from "../assets/image/icon/react.png";
import htmlIcon from "../assets/image/icon/html.png";
import cssIcon from "../assets/image/icon/css.png";
import bootstrapIcon from "../assets/image/icon/bootstrap.png";
import jsIcon from "../assets/image/icon/js.png";
import nodejsIcon from "../assets/image/icon/nodejs.png";
import dartIcon from "../assets/image/icon/dart.png";
import flutterIcon from "../assets/image/icon/flutter.png";
import javaIcon from "../assets/image/icon/java.png";
import mongodbIcon from "../assets/image/icon/mongodb.png";
import firebaseIcon from "../assets/image/icon/firebase.png";
import microsoftsqlIcon from "../assets/image/icon/microsoftsql.png";
import vscodeIcon from "../assets/image/icon/vscode.png";
import androidstudioIcon from "../assets/image/icon/androidstudio.png";

import "../assets/css/icon.css";

const Skills = () => {
  const squareImageStyle = {
    width: "75px",
    height: "75px",
    objectFit: "cover",
  };

  // Classified skills
  const skillCategories = {
    Languages: [
      { src: htmlIcon, alt: "HTML" },
      { src: cssIcon, alt: "CSS" },
      { src: jsIcon, alt: "JavaScript" },
      { src: dartIcon, alt: "Dart" },
      { src: javaIcon, alt: "Java" },
    ],
    Frameworks: [
      { src: reactIcon, alt: "React" },
      { src: bootstrapIcon, alt: "Bootstrap" },
      { src: nodejsIcon, alt: "Node.js" },
      { src: flutterIcon, alt: "Flutter" },
    ],
    Databases: [
      { src: mongodbIcon, alt: "MongoDB" },
      { src: microsoftsqlIcon, alt: "Microsoft SQL" },
      { src: firebaseIcon, alt: "Firebase" },
    ],
    Tools: [
      { src: vscodeIcon, alt: "VS Code" },
      { src: androidstudioIcon, alt: "Android Studio" },
    ],
  };

  // Education data
  const education = [
    {
      school: "St. Joseph's Academy",
      degree: "STEM",
      year: "2018 – 2020",
      details: "Senior High School",
    },
    {
      school: "National University",
      degree: "Bachelor of Science in Information Technology",
      year: "2020 – 2025",
      details: "Specializing in Mobile and Web Application Development",
    },
  ];

  return (
    <div className="container-fluid mt-5">
      {/* Education */}
      <div className="mb-5">
        <h3 className="text-center mb-4">Education</h3>
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <div key={index} className="col-md-6 mb-3">
              <div className="card shadow-sm p-3 h-100">
                <h5>{edu.school}</h5>
                <p className="mb-1">
                  <strong>{edu.degree}</strong>
                </p>
                <p className="mb-1 text-muted">{edu.year}</p>
                <p>{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/*Skills*/}
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-5">
          <h3 className="text-center mb-4">{category}</h3>
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-3 col-lg-2 p-3 text-center"
              >
                <Img src={skill.src} alt={skill.alt} className="skill-img" />
                <p className="mt-2">{skill.alt}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
