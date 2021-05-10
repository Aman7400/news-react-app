import React from "react";
import "./NewsCard.css";

const NewsCard = ({ item }) => {
  return item.title != null &&
    item.urlToImage != null &&
    item.description &&
    item.url != null ? (
    <div className="Card">
      <div className="Image">
        <img src={item.urlToImage} alt="" className="CardImage" />
      </div>

      <div className="Text">
        <h6>{item.title}</h6>
        <p>{item.description}</p>
      </div>
      <div className="CTA">
        <a
          target="_blank"
          href={item.url}
          className="btn btn-outline-dark btn-block"
          rel="noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  ) : (
    <></>
  );
};

//   return (
//     <div>
//       <h1>{item.title}</h1>
//       <p>{item.description}</p>
//     </div>
//   );

export default NewsCard;
