import PropTypes from "prop-types";
const ImagesZoom = ({ images, onClose }) => {};
ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
