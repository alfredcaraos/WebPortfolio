import React from "react";
import ProfPic from "../assets/image/profPic.jpg";
import Pic1 from "../assets/image/picture1.jpg";
import Img from "../components/Img";

const Home = () => {
  return (
    <div className="container-fluid px-5 py-5">
      {/* === Section 1: Introduction === */}
      <div className="row align-items-center mb-5">
        <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
          <Img
            src={ProfPic}
            alt="Profile Picture"
            className="img-fluid rounded-5 shadow"
            style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4 text-primary fw-bold">👋 Introduction</h1>
          <p className="fs-4 lh-lg text-secondary">
            My name is <span className="fw-semibold">Alfred A. Caraos</span>, a proud graduate
            of <span className="fw-semibold">National University Manila</span> with a
            Bachelor's degree in <span className="fw-semibold">Information Technology</span>,
            specializing in <span className="fw-semibold">Mobile and Web Application</span>.
          </p>
          <p className="fs-5 lh-lg text-muted">
            I thrive on solving complex problems — analyzing challenges, breaking them down,
            and crafting solutions through code and creativity. My passion lies in learning,
            experimenting, and continuously improving.
          </p>
        </div>
      </div>

      {/* === Section 2: New Adventure === */}
      <div className="row align-items-center flex-lg-row-reverse">
        <div className="col-lg-6 d-flex justify-content-center mb-4 mb-lg-0">
          <Img
            src={Pic1}
            alt="A Person Coding"
            className="img-fluid rounded-5 shadow"
            style={{ maxWidth: "100%", maxHeight: "500px", objectFit: "cover" }}
          />
        </div>
        <div className="col-lg-6">
          <h1 className="mb-4 text-success fw-bold">🚀 New Adventure</h1>
          <p className="fs-4 lh-lg text-secondary">
            Embark on a new adventure with me into the dynamic world of web development!
          </p>
          <p className="fs-5 lh-lg text-muted">
            Every line of code is a step into the unknown — a challenge to conquer, a
            puzzle to solve. I explore uncharted frameworks, navigate design patterns,
            and optimize performance. Join me on this journey as I share my wins, bugs,
            and everything in between.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
