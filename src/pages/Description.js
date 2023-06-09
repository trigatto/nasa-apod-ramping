import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../Context";

function Description() {
  const { id } = useParams();
  const { allPhotos } = useContext(Context);

  const selectedPhoto = allPhotos.find((img) => img.date === id);

  const tempTitle = "Image Title";
  const tempDate = "YYYY-MM-DD";
  const tempExplanation =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed risus nec massa posuere fermentum. Suspendisse id pharetra dui. Vestibulum venenatis sed ipsum nec cursus. Sed vel lacinia ex. Vivamus vitae ante et mi gravida ullamcorper ac in orci. Duis venenatis libero ac rhoncus vulputate. Fusce fringilla tellus nec mi tempor, sed sagittis mauris tincidunt.";
  const tempImg = "https://via.placeholder.com/1024";

  const isPlaceholder = !selectedPhoto;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {isPlaceholder ? (
        <div>
          <h2>{tempTitle}</h2>
          <img
            src={tempImg}
            alt={tempTitle}
            style={{
              maxWidth: "70%",
              maxHeight: "70vh",
              width: "auto",
              height: "auto",
              marginTop: "20px",
            }}
          />
          <p>Date: {tempDate}</p>
          <p>{tempExplanation}</p>
        </div>
      ) : (
        <div>
          <h2>{selectedPhoto.title}</h2>
          <p>Date: {selectedPhoto.date}</p>
          <p>{selectedPhoto.explanation}</p>
          <img
            src={selectedPhoto.url}
            alt={selectedPhoto.title}
            style={{
              maxWidth: "80%",
              maxHeight: "80vh",
              width: "auto",
              height: "auto",
              marginTop: "20px",
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Description;
