import React from "react";
import categoryJsonData from "../../data/categories.json";
import "../styles/CategoryStyle.css";

const Categories = () => {
  return (
    <div className="category">
      <div className="titleTag">
        <p className="title">
          <p>All Category</p>
          <span>
            <img
              src="/images/logo.png"
              alt="OneClick"
              className="image-icon2"
            />
          </span>
        </p>

        <p className="tag">View All</p>
      </div>
      <div className="categoryNames">
        {categoryJsonData.map((item, index) => {
          return <p style={{ padding: "10px" }}>{item.name}</p>;
        })}
      </div>
    </div>
  );
};

export default Categories;
