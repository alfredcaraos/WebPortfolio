// utils/loadImages.js
export const loadImages = (path, captions = []) => {
  // Dynamically import all images from a given path
  const imageModules = import.meta.glob(`${path}/*.{png,jpg,jpeg,svg}`, {
    eager: true,
  });

  // Return an array of { src, caption }
  return Object.values(imageModules).map((module, index) => ({
    src: module.default,
    caption: captions[index] || "", // Optional caption
  }));
};
