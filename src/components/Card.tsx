import React from "react";

export const Card: React.FC<any> = ({ imgUrl, bgColor, title }) => {
  return (
      <>
    <div className="card-shape"
          style={{ backgroundColor: `${bgColor}` }}>
              <span className="card-title">{title}</span>
      <img className="cars" src={imgUrl} alt="car" />
    </div>
   </>
  );
};
