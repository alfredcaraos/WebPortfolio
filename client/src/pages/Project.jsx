import reactIcon from "../assets/image/icon/react.png";
import htmlIcon from "../assets/image/icon/html.png";
import cssIcon from "../assets/image/icon/css.png";
import bootstrapIcon from "../assets/image/icon/bootstrap.png";
import jsIcon from "../assets/image/icon/js.png";
import nodejsIcon from "../assets/image/icon/nodejs.png";
import mongodbIcon from "../assets/image/icon/mongodb.png";
import firebaseIcon from "../assets/image/icon/firebase.png";
import flutterIcon from "../assets/image/icon/flutter.png";
import dartIcon from "../assets/image/icon/dart.png";
import phpIcon from "../assets/image/icon/php.png";
import ProjectSection from "../components/ProjectSection";
import "../assets/css/icon.css";

// Dynamically import all images in folder
const imageModules = import.meta.glob(
  "../assets/image/rdo/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const images = Object.values(imageModules).map((module) => module.default);

// Shared tools for both projects
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

const trainTools = {
  Frameworks: [
    { src: bootstrapIcon, alt: "Bootstrap" },
    { src: dartIcon, alt: "Dart" },
    { src: flutterIcon, alt: "Flutter" },
    { src: firebaseIcon, alt: "Firebase" },
    { src: htmlIcon, alt: "HTML" },
    { src: cssIcon, alt: "CSS" },
    { src: jsIcon, alt: "JavaScript" },
    { src: phpIcon, alt: "PHP" },
  ],
};

// Define projects data
const projects = [
  {
    title: "RDO : Incentive Module and Incentive Management",
    media: images,
    tools: rdoTools,
    description: [
      "It is a web application for the faculty of the National University.",
      "It's aim is to create a social website that tackles on research purposes of the faculty of the National University.",
    ],
    objectives: [
      "Create a module for applying incentive form for budget proposal.",
      "Assign a list of sponsors for incentive form based from the campus and college of the user.",
      "Create a module for managing and viewing of the created forms.",
      "Create a module for sponsors who would approve or decline the created forms of the user.",
    ],
    contributions: [
      "Developed a module for submitting research incentive forms, incorporating OTP verification for submission, approval, and rejection processes.",
      "Implemented Redux and RTK Query for API mutation and query for the incentive module.",
      "Created a function that auto complete an user based from the characters from the user field.",
      "Implemented a print to pdf function of an incentive form.",
    ],
  },
  {
  title: "Train Tracker",
  media: [
    {
      type: "video",
      src: "https://www.youtube.com/embed/_oAQb3nXnYk",
      caption: "Passenger App: Train location tracking",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/aPfvLc93JwQ",
      caption: "Admin Dashboard: Real-time updates",
    },
    {
      type: "video",
      src: "https://www.youtube.com/embed/2B_YnvorjJM",
      caption: "Communication Module: Admin ↔ Train",
    },
  ],
  tools: trainTools,
  description: [
    "A mobile and web application providing real-time train updates to passengers and administrators.",
    "The passenger app shows live train locations, estimated arrivals, and route information.",
    "The admin dashboard includes tools for monitoring train movements and communicating with operators.",
    "A web communication module was developed to allow messages and alerts to be sent between the admin and train in real time.",
  ],
  objectives: [
    "Develop a phone module to track train location using GPS.",
    "Implement a two-way communication channel between admin and train operators.",
    "Deliver a responsive web interface for real-time monitoring.",
  ],
  contributions: [
    "Designed and implemented GPS-based tracking for train positions.",
    "Built the admin dashboard for real-time monitoring with alert notifications.",
  ],
}

];

const Project = () => {
  return (
    <div>
      <h2 className="mt-3 p-3 text-center">Projects</h2>
      {projects.map((proj, idx) => (
        <ProjectSection key={idx} {...proj} />
      ))}
    </div>
  );
};

export default Project;
