import React from "react";
import { useHistory } from "react-router-dom";

function Image({ className, img, onClick }) {
  const history = useHistory();

  const handleClick = (event) => {
    event.preventDefault();
    onClick();
  };

  return (
    <div className={`${className} image-container`} onClick={handleClick}>
      {img && <img src={img.url} className="image-grid" alt='galaxy on specific day' />}
    </div>
  );
}

export default Image;
