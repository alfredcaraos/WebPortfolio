import Img from "../components/Img";
import ProjectSlideshow from "../components/ProjectSlideshow ";

import ProfPic from "../assets/image/profPic.jpg";
import Pic1 from "../assets/image/picture1.jpg";

// Dynamically import all images in folder
const imageModules = import.meta.glob(
  "../assets/image/rdo/*.{png,jpg,jpeg,svg}",
  { eager: true }
);
const images = Object.values(imageModules).map((module) => module.default);

const Project = () => {
  return (
    <div>
      <div className="container-fluid p-5">
        <div className="text-center">
          <h2 className="p-3">Projects</h2>
          <h3>RDO : Incentive Module and Incentive Management</h3>
          <ProjectSlideshow
            images={images}
            className={"d-flex justify-content-center"}
          />
        </div>
      </div>
    </div>
  );
};

export default Project;
