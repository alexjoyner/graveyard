export const resizeWindow = (height, width) => {
  window.innerHeight = height;
  window.innerWidth = width;
  window.dispatchEvent(new Event('resize'));
};
