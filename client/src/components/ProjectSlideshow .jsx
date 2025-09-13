import React from "react";

const ProjectSlideshow = ({ images, className }) => {
  return (
    <div className= {className}>
      <div
        id="projectCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        style={{ maxWidth: "600px" }}
      >
        <div className="carousel-inner">
          {images.map((img, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img
                src={img}
                className="d-block w-100"
                alt={`Slide ${i + 1}`}
                style={{ width: "100%", height: "300px", objectFit: "cover" }}
              />
            </div>
          ))}
        </div>

        {/* Previous Button */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>

        {/* Next Button */}
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#projectCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default ProjectSlideshow;
