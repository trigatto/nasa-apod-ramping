import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Context } from "../Context";
import Image from "../components/Image";

function Photos() {
  const history = useHistory();
  const { allPhotos } = useContext(Context);

  const renderImages = () => {
    if (allPhotos.length === 0) {
      const tempBlocks = [];
      for (let i = 0; i < 12; i++) {
        const tempId = `temp-${i}`;
        tempBlocks.push(
          <Image
            key={tempId}
            className="image-placeholder"
            onClick={() => handleClick(tempId)}
          />
        );
      }
      return tempBlocks;
    }

    return allPhotos.map((img) => (
      <Image
        key={img.date}
        className="image-container"
        img={img}
        onClick={() => handleClick(img.date)}
      />
    ));
  };

  const handleClick = (id) => {
    history.push(`/description/${id}`);
  };

  return <main className="photos">{renderImages()}</main>;
}

export default Photos;