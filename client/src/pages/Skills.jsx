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
    <div className="container-fluid mt-5 px-4">
      {/* Education Section */}
      <div className="mb-5">
        <h2 className="text-center fw-bold mb-4">🎓 Education</h2>
        <div className="row justify-content-center">
          {education.map((edu, index) => (
            <div key={index} className="col-md-5 m-3">
              <div
                className="card border-0 shadow rounded-4 p-4 h-100 hover-shadow"
                style={{
                  transition: "transform 0.2s ease-in-out",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <h5 className="fw-bold">{edu.school}</h5>
                <p className="mb-1">
                  <strong>{edu.degree}</strong>
                </p>
                <p className="mb-1 text-muted">{edu.year}</p>
                <p className="mb-0">{edu.details}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Section */}
      {Object.entries(skillCategories).map(([category, skills]) => (
        <div key={category} className="mb-5">
          <h2 className="text-center fw-bold mb-4">{category}</h2>
          <div className="row justify-content-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="col-6 col-sm-4 col-md-3 col-lg-2 text-center mb-4"
              >
                <div
                  className="p-3 rounded-4 shadow-sm bg-white d-flex flex-column align-items-center justify-content-center"
                  style={{
                    transition: "transform 0.2s ease, box-shadow 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 16px rgba(0, 0, 0, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow =
                      "0 2px 6px rgba(0, 0, 0, 0.1)";
                  }}
                >
                  <Img
                    src={skill.src}
                    alt={skill.alt}
                    className="skill-img"
                    style={{ width: "75px", height: "75px", objectFit: "contain" }}
                  />
                  <p className="mt-2 mb-0 fw-semibold">{skill.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
