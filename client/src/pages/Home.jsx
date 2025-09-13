import React from "react";

import ProfPic from "../assets/image/profPic.jpg";
import Pic1 from "../assets/image/picture1.jpg";

import Img from "../components/Img";

const Home = () => {
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="row">
          {/*Row 1 of the HomeLayout*/}
          <div className="col-md m-2">
            <Img
              src={ProfPic}
              alt={"Profile Picture"}
              className={"img-fluid p-3 rounded-5"}
            />
          </div>
          <div className="col-md m-2">
            <div>
              <h1 className="my-5">Introduction</h1>
              <p className="fs-4">
                My name is Alfred A. Caraos, graduate of National University
                Manila with the course of Bachelor of Science in Information
                Technology Specializing at Mobile and Web Application. I have
                great problem solving skills that allows me to use my knowledge
                and resources to analyze the problem and to formulate a plan on
                how would I tackle the problem.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          {/*Row 2 of the HomeLayout*/}
          <div className="col-md m-2">
            <Img
              src={Pic1}
              alt={"A Person Coding"}
              className={"img-fluid p-3 rounded-5"}
              style={{ width: "700px", height: "600px", objectFit: "cover" }}
            />
          </div>
          <div className="col-md m-2">
            <div>
              <h1 className="my-5">New Adventure</h1>
              <p className="fs-4">
                Embark on a new adventure with me into the dynamic world of web
                development! Every line of code is a step into the unknown — a
                challenge to conquer, a puzzle to solve. Here, I explore
                uncharted frameworks, navigate complex design patterns, and
                brave the wild terrain of optimization and performance. I'll be
                documenting my journey, sharing the highs, the bugs, and
                everything in between. Whether you're a fellow explorer or just
                curious about the path, you're always welcome to join the quest!
              </p>
            </div>
          </div>
        </div>

       
      </div>
    </div>
  );
};

export default Home;
