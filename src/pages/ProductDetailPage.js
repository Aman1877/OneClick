import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import "../../src/components/styles/ProductDetailsStyle.css";
import Review from "../components/Layout/Review";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const aboutpage = () => {
    navigate("/aboutus");
  };

  return (
    <>
      <Layout>
        <div className="container-1">
          <div>
            <div className="card">
              <img
                src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
                alt="aman"
              />
            </div>
            <div className="card-2">
              <span>
                <img
                  className="icon"
                  src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
                  alt="aman"
                />
                <img
                  className="icon"
                  src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
                  alt="aman"
                />
                <img
                  className="icon"
                  src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
                  alt="aman"
                />
              </span>
            </div>
          </div>
          <div className="card-3">
            <p onClick={aboutpage}>Round toe leather loafer shoe (Black)</p>
            <p style={{ fontWeight: "100", fontSize: "15px" }}>
              <i
                class="bi bi-heart"
                style={{ color: "red", marginRight: "5px" }}
              ></i>
              Add to my wishlist
            </p>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
              }}
            >
              <div>
                <p style={{ color: "gray", fontSize: "15px", margin: "0" }}>
                  Occasion{" "}
                  <span style={{ color: "black", marginLeft: "10px" }}>
                    Sports
                  </span>
                </p>
                <p style={{ color: "gray", fontSize: "15px", margin: "0" }}>
                  Size{" "}
                  <span style={{ color: "black", marginLeft: "10px" }}>12</span>
                </p>
              </div>
              <div>
                <p style={{ color: "gray", fontSize: "15px", margin: "0" }}>
                  Color{" "}
                  <span style={{ color: "black", marginLeft: "10px" }}>
                    Red
                  </span>
                </p>
                <p style={{ color: "gray", fontSize: "15px", margin: "0" }}>
                  Type{" "}
                  <span style={{ color: "black", marginLeft: "10px" }}>
                    Running shoes, Women shoes
                  </span>
                </p>
              </div>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "10px",
                marginTop: "40px",
              }}
            >
              <span>
                <img src="/images/currency-rupee.svg" alt="ruppe" />
                <b>58.30</b>
              </span>
              <span>
                <button>Inquiry Now</button>
              </span>
            </div>
            <div style={{ paddingTop: "6%" }}>
              <p>Description</p>
              <p
                style={{
                  fontWeight: "200",
                  fontSize: "15px",
                  lineHeight: "1.6",
                  maxHeight: "50px",
                  maxWidth: "600px",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>

        {/* second div */}
        <div className="container-2">
          <div className="card">
            <img
              style={{ borderRadius: "10px" }}
              src="https://static.nike.com/a/images/f_auto/2e8d9338-b43d-4ef5-96e1-7fdcfd838f8e/image.jpg"
              alt="abc"
            />
            <button
              style={{
                marginTop: "20px",
                backgroundColor: "green",
                borderRadius: "10px",
              }}
              className="btn btn-primary"
            >
              Follow
            </button>
            <div className="card-body">
              <p style={{ fontWeight: "600" }}>
                Tab Sport{" "}
                <span style={{ color: "black", marginLeft: "60%" }}>
                  4.8 <i style={{ color: "yellow" }} class="bi bi-star"></i>
                </span>
              </p>
              <p className="card-text">
                218/B, Near Mala sheri
                <br />
                Mumbai, Maharastra - 259632
                <br />
                Open Now :<br />
                Mon - Sun :- 10:30 am - 9:30 pm
              </p>
            </div>
            <button
              style={{
                marginTop: "20px",
                borderRadius: "10px",
                backgroundColor: "white",
                color: "black",
                border: "2px solid green",
              }}
              className="btn"
            >
              About Supplier
            </button>
          </div>
          <div className="spec">
            <p
              style={{
                color: "black",
                fontFamily: "Poppins-SemiBold, Helvetica",
                fontSize: "18px",
                fontWeight: "600",
              }}
            >
              Specification
            </p>
            <div className="card-4">
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Product Model</span>
                <span style={{ fontWeight: "700" }}>Escaper Mesh</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ whiteSpace: "pre-line" }}>
                  Manufacture
                  <br />
                  details
                </span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  48/B, Batahouse, malaseri
                  <br />
                  <span style={{ marginLeft: "auto" }}>Bhat-gandhinagar</span>
                </span>
              </p>

              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Product weight</span>
                <span style={{ fontWeight: "700" }}>0.7190kg,719gm</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Brand</span>
                <span style={{ fontWeight: "700" }}>Puma</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Size</span>
                <span style={{ fontWeight: "700" }}>11</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Type</span>
                <span style={{ fontWeight: "700" }}>
                  Running shoes,Women shoes
                </span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Color</span>
                <span style={{ fontWeight: "700" }}>Navy</span>
              </p>
            </div>
          </div>
        </div>
        <p
          style={{
            paddingLeft: "4%",
            marginLeft: "2%",
            marginTop: "3%",
            color: "black",
            fontFamily: "Poppins-SemiBold, Helvetica",
            fontSize: "18px",
            fontWeight: "600",
          }}
        >
          More from this seller
        </p>
        <div className="container-3">
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="icon-2"
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
              alt="aman"
            />
            <div className="card-body">
              <p style={{ fontWeight: "bold" }}>
                Round toe leather loafer shoe (Black)
              </p>
              <p style={{ color: "blue" }}>Rainbow shoes & enterprise</p>
              <p className="card-text">
                <span>Prototype</span>
                <span style={{ float: "right" }}>
                  <img src="/images/currency-rupee.svg" alt="ruppe" />
                  1800
                </span>
              </p>
              <hr></hr>
              <p className="card-text">
                <span>Category</span>
                <span style={{ float: "right" }}>Subcategory</span>
              </p>
              <p className="card-text">
                <span>Shoes</span>
                <span style={{ float: "right" }}>Shoes</span>
              </p>
            </div>
          </div>
          {/* card2  */}
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="icon-2"
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
              alt="aman"
            />
            <div className="card-body">
              <p style={{ fontWeight: "bold" }}>
                Round toe leather loafer shoe (Black)
              </p>
              <p style={{ color: "blue" }}>Rainbow shoes & enterprise</p>
              <p className="card-text">
                <span>Prototype</span>
                <span style={{ float: "right" }}>
                  <img src="/images/currency-rupee.svg" alt="ruppe" />
                  1800
                </span>
              </p>
              <hr></hr>
              <p className="card-text">
                <span>Category</span>
                <span style={{ float: "right" }}>Subcategory</span>
              </p>
              <p className="card-text">
                <span>Shoes</span>
                <span style={{ float: "right" }}>Shoes</span>
              </p>
            </div>
          </div>
          {/* card3  */}
          <div className="card" style={{ width: "15rem" }}>
            <img
              className="icon-2"
              src="https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/71YYgFGf-xL._AC_UL320_.jpg"
              alt="aman"
            />
            <div className="card-body">
              <p style={{ fontWeight: "bold" }}>
                Round toe leather loafer shoe (Black)
              </p>
              <p style={{ color: "blue" }}>Rainbow shoes & enterprise</p>
              <p className="card-text">
                <span>Prototype</span>
                <span style={{ float: "right" }}>
                  <img src="/images/currency-rupee.svg" alt="ruppe" />
                  1800
                </span>
              </p>
              <hr></hr>
              <p className="card-text">
                <span>Category</span>
                <span style={{ float: "right" }}>Subcategory</span>
              </p>
              <p className="card-text">
                <span>Shoes</span>
                <span style={{ float: "right" }}>Shoes</span>
              </p>
            </div>
          </div>
        </div>
        <Review />
      </Layout>
    </>
  );
};

export default ProductDetailPage;
