import React from "react";
import "../styles/SimilarProductStyle.css";

const SimilarProduct = () => {
  return (
    <>
      <p
        style={{
          color: "black",
          fontFamily: "Poppins-SemiBold, Helvetica",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        More from this seller
      </p>
      <div className="similar-product">
        <div className="card" style={{ width: "15rem" }}>
          <img
            className="produc-icon"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
            alt="aman"
          />
          <div className="card-body">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Round toe leather loafer shoe (Black)
            </p>
            <p style={{ color: "blue", fontSize: "10px" }}>
              Rainbow shoes & enterprise
            </p>
            <p className="card-text" style={{ fontSize: "15px" }}>
              <span>Prototype</span>
              <span style={{ float: "right" }}>
                <img src="/images/currency-rupee.svg" alt="ruppe" />
                1800
              </span>
            </p>
            <hr></hr>
            <p
              className="card-text"
              style={{ fontSize: "12px", color: "gray" }}
            >
              <span>Category</span>
              <span style={{ float: "right" }}>Subcategory</span>
            </p>
            <p className="card-text" style={{ fontSize: "14px" }}>
              <span>Shoes</span>
              <span style={{ float: "right" }}>Shoes</span>
            </p>
          </div>
        </div>
        {/* card2  */}
        <div className="card" style={{ width: "15rem" }}>
          <img
            className="produc-icon"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
            alt="aman"
          />
          <div className="card-body">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Round toe leather loafer shoe (Black)
            </p>
            <p style={{ color: "blue", fontSize: "10px" }}>
              Rainbow shoes & enterprise
            </p>
            <p className="card-text" style={{ fontSize: "15px" }}>
              <span>Prototype</span>
              <span style={{ float: "right" }}>
                <img src="/images/currency-rupee.svg" alt="ruppe" />
                1800
              </span>
            </p>
            <hr></hr>
            <p
              className="card-text"
              style={{ fontSize: "12px", color: "gray" }}
            >
              <span>Category</span>
              <span style={{ float: "right" }}>Subcategory</span>
            </p>
            <p className="card-text" style={{ fontSize: "14px" }}>
              <span>Shoes</span>
              <span style={{ float: "right" }}>Shoes</span>
            </p>
          </div>
        </div>
        {/* card3  */}
        <div className="card" style={{ width: "15rem" }}>
          <img
            className="produc-icon"
            src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
            alt="aman"
          />
          <div className="card-body">
            <p style={{ fontWeight: "bold", fontSize: "16px" }}>
              Round toe leather loafer shoe (Black)
            </p>
            <p style={{ color: "blue", fontSize: "10px" }}>
              Rainbow shoes & enterprise
            </p>
            <p className="card-text" style={{ fontSize: "15px" }}>
              <span>Prototype</span>
              <span style={{ float: "right" }}>
                <img src="/images/currency-rupee.svg" alt="ruppe" />
                1800
              </span>
            </p>
            <hr></hr>
            <p
              className="card-text"
              style={{ fontSize: "12px", color: "gray" }}
            >
              <span>Category</span>
              <span style={{ float: "right" }}>Subcategory</span>
            </p>
            <p className="card-text" style={{ fontSize: "14px" }}>
              <span>Shoes</span>
              <span style={{ float: "right" }}>Shoes</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SimilarProduct;
