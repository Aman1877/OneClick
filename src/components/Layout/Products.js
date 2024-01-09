import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../../data/products.json";
import "../styles/ProductStyle.css";
const Products = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/product");
  };

  return (
    <>
      <div className="col-md-12" style={{ paddingBottom: "2%" }}>
        <p className="category-title">
          <p>All Shoes</p>
          <span>
            <img
              src="/images/logo.png"
              alt="OneClick"
              className="image-icon2"
            />
          </span>
        </p>
        <div className="row">
          {products?.map((p, index) => (
            <div
              className="card"
              style={{ width: "15rem" }}
              onClick={handleClick}
            >
              <img className="produc-icon" src={p.image} alt="aman" />
              <div className="card-body">
                <p style={{ fontWeight: "bold" }}>{p.name}</p>
                <p style={{ color: "blue", fontSize: "13px" }}>{p.lead}</p>
                <p>
                  {" "}
                  <span>{p.model}</span>
                  <span style={{ float: "right" }}>₹ {p.price}</span>
                </p>
                <hr></hr>
                <p className="card-text">
                  <span style={{ color: "gray" }}>Category</span>
                  <span style={{ float: "right", color: "gray" }}>
                    Subcategory
                  </span>
                </p>
                <p className="card-text">
                  <span style={{ fontWeight: "bolder" }}>{p.category}</span>
                  <span
                    style={{
                      float: "right",
                      fontWeight: "bolder",
                    }}
                  >
                    {p.subcategory}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
