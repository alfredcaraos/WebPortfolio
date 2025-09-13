import ProjectSlideshow from "../components/ProjectSlideshow ";
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
import Img from "../components/Img";
import "../assets/css/icon.css";

// Dynamically import all images in folder
const imageModules = import.meta.glob(
  "../assets/image/rdo/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const images = Object.values(imageModules).map((module) => module.default);

const Project = () => {
  // Classified skills
  const rdoTools = {
    Frameworks: [
      { src: reactIcon, alt: "React" },
      { src: bootstrapIcon, alt: "Bootstrap" },
      { src: nodejsIcon, alt: "Node.js" },
      { src: mongodbIcon, alt: "MongoDB" },
      { src: htmlIcon, alt: "HTML" },
      { src: cssIcon, alt: "CSS" },
      { src: jsIcon, alt: "JavaScript" },
    ],
  };

  return (
    <div>
      <div className="container-fluid px-5 pt-5 d-flex justify-content-center">
        <div className="">
          <h2 className="p-3 text-center">Projects</h2>
          <h3 className="py-3 text-center">
            RDO : Incentive Module and Incentive Management
          </h3>
          <ProjectSlideshow
            images={images}
            className={"d-flex justify-content-center"}
          />
          <div className="mx-5 my-5 px-5 py-3">
            <div>
              <h4 className="py-3">Tools:</h4>
              {Object.entries(rdoTools).map(([category, skills]) => (
                <div key={category} className="mb-5">
                  <div className="row justify-content-center">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="col-6 col-sm-4 col-md-3 col-lg-2 p-3 text-center"
                      >
                        <Img
                          src={skill.src}
                          alt={skill.alt}
                          className="skill-img"
                        />
                        <p className="mt-2">{skill.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="py-3">Description:</h4>
              <ul>
                <li className="fs-5">
                  It is a web application for the faculty of the National
                  University.
                </li>
                <li className="fs-5">
                  It's aim is to create a social website that tackles on
                  research purposes of the faculty of the National University.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="py-3">Objectives:</h4>
              <ul>
                <li className="fs-5">
                  Create a module for applying incentive form for budget
                  proposal.
                </li>
                <li className="fs-5">
                  Assign a list of sponsors for incentive form based from the
                  campus and college of the user.
                </li>
                <li className="fs-5">
                  Create a module for managing and viewing of the created forms.
                </li>
                <li className="fs-5">
                  Create a module for sponsors who would approve or decline the
                  created forms of the user.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="py-3">Contribution:</h4>
              <ul>
                <li className="fs-5">
                  Developed a module for submitting research incentive forms,
                  incorporating OTP verification for submission, approval, and
                  rejection processes.
                </li>
                <li className="fs-5">
                  Implemented Redux and RTK Query for API mutation and query for
                  the incentive module.
                </li>
                <li className="fs-5">
                  Created a function that auto complete an user based from the
                  characters from the user field.
                </li>
                <li className="fs-5">
                  Implemented a print to pdf function of an incentive form.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid px-5 pt-5 d-flex justify-content-center">
        <div className="">
          <h3 className="py-3 text-center">Train Tracker</h3>
         {/*Youtube*/}
          <div className="mx-5 my-5 px-5 py-3">
            <div>
              <h4 className="py-3">Tools:</h4>
              {Object.entries(rdoTools).map(([category, skills]) => (
                <div key={category} className="mb-5">
                  <div className="row justify-content-center">
                    {skills.map((skill, index) => (
                      <div
                        key={index}
                        className="col-6 col-sm-4 col-md-3 col-lg-2 p-3 text-center"
                      >
                        <Img
                          src={skill.src}
                          alt={skill.alt}
                          className="skill-img"
                        />
                        <p className="mt-2">{skill.alt}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <h4 className="py-3">Description:</h4>
              <ul>
                <li className="fs-5">
                  A mobile and web application for train update.
                </li>
                 <li className="fs-5">
                  A mobile application for the passenger of the train.
                </li>
                <li className="fs-5">
                  Using phone to track the train and web for the operator.
                </li>
                <li className="fs-5">
                  Create a web for communication from admin to the train.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="py-3">Objectives:</h4>
              <ul>
                <li className="fs-5">
                  Create a module phone to track the train location.
                </li>
                <li className="fs-5">
                  Assign a list of sponsors for incentive form based from the
                  campus and college of the user.
                </li>
                <li className="fs-5">
                  Create a module for managing and viewing of the created forms.
                </li>
                <li className="fs-5">
                  Create a module for sponsors who would approve or decline the
                  created forms of the user.
                </li>
              </ul>
            </div>
            <div>
              <h4 className="py-3">Contribution:</h4>
              <ul>
                <li className="fs-5">
                  Developed a module for submitting research incentive forms,
                  incorporating OTP verification for submission, approval, and
                  rejection processes.
                </li>
                <li className="fs-5">
                  Implemented Redux and RTK Query for API mutation and query for
                  the incentive module.
                </li>
                <li className="fs-5">
                  Created a function that auto complete an user based from the
                  characters from the user field.
                </li>
                <li className="fs-5">
                  Implemented a print to pdf function of an incentive form.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
