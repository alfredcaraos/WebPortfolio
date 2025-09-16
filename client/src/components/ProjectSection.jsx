import Img from "../components/Img";
import ProjectSlideshow from "./ProjectSlideshow";

const ProjectSection = ({ title, media, tools, description, objectives, contributions }) => {
  // Detect if media contains videos
  const isVideo =
    Array.isArray(media) &&
    media.length > 0 &&
    media.every((item) =>
      typeof item === "string"
        ? item.includes("youtube.com") || item.includes("vimeo.com")
        : item.type === "video"
    );

  return (
    <div className="container-fluid px-4 pt-5 pb-5 d-flex justify-content-center">
      <div className="w-100" style={{ maxWidth: "1200px" }}>
        {/* Section Title */}
        {title && (
          <h2 className="fw-bold text-center mb-5">{title}</h2>
        )}

        {/* ✅ Media Section (Video or Slideshow) */}
        <div className="d-flex justify-content-center mb-5">
          {isVideo ? (
            <div className="w-75">
              {media.map((item, index) => {
                const src = typeof item === "string" ? item : item.src;
                const caption = typeof item === "object" ? item.caption : null;

                return (
                  <div key={index} className="mb-4 text-center">
                    <div className="ratio ratio-16x9 rounded-4 shadow-lg overflow-hidden">
                      <iframe
                        src={src}
                        title={`video-${index}`}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-100 h-100"
                      />
                    </div>
                    {caption && <p className="mt-3 text-muted">{caption}</p>}
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="shadow-lg rounded-4 overflow-hidden w-75">
              <ProjectSlideshow images={media} className="d-flex justify-content-center py-5" />
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="px-4 py-4 rounded-4 bg-light shadow-sm">
          {/* Tools Section */}
          {tools && (
            <div className="mb-5">
              <h3 className="text-center fw-bold mb-4">🛠 Tools Used</h3>
              <div className="row justify-content-center">
                {Object.entries(tools).map(([category, skills]) => (
                  <div key={category} className="mb-4">
                    <h5 className="text-center text-primary">{category}</h5>
                    <div className="row justify-content-center">
                      {skills.map((skill, index) => (
                        <div
                          key={index}
                          className="col-6 col-sm-4 col-md-3 col-lg-2 text-center p-3"
                        >
                          <div
                            className="p-3 rounded-4 bg-white shadow-sm"
                            style={{ transition: "transform 0.2s ease" }}
                            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                          >
                            <Img src={skill.src} alt={skill.alt} className="skill-img" />
                            <p className="mt-2 mb-0 fw-semibold">{skill.alt}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Description */}
          {description?.length > 0 && (
            <div className="mb-4">
              <h3 className="fw-bold mb-3">📄 Description</h3>
              <ul className="fs-5">
                {description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Objectives */}
          {objectives?.length > 0 && (
            <div className="mb-4">
              <h3 className="fw-bold mb-3">🎯 Objectives</h3>
              <ul className="fs-5">
                {objectives.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Contributions */}
          {contributions?.length > 0 && (
            <div className="mb-2">
              <h3 className="fw-bold mb-3">🤝 Contributions</h3>
              <ul className="fs-5">
                {contributions.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;
