import React from "react";
import Layout from "../components/Layout/Layout";
import "../../src/components/styles/AboutusStyle.css";
import SimilarProduct from "../components/Layout/SimilarProduct";
import Awards from "../components/Layout/Awards";
import Review from "../components/Layout/Review";
const AboutuPage = () => {
  return (
    <>
      <Layout>
        <div className="main-container">
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
              <p style={{ fontWeight: "600" }}>Tab Sport </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ whiteSpace: "pre-line" }}>
                  Phone
                  <br />
                  Number
                </span>
                <span style={{ fontWeight: "700" }}>+91-123456789</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Email</span>
                <span style={{ fontWeight: "700" }}>rahul@gmail.com</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Name</span>
                <span style={{ fontWeight: "700" }}>Rahul Sharma</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ whiteSpace: "pre-line" }}>Address</span>
                <span style={{ fontWeight: "700", textAlign: "right" }}>
                  Bhatt Sector <br />
                  <span style={{ marginLeft: "auto" }}>Gandhinagar</span>
                </span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>State</span>
                <span style={{ fontWeight: "700" }}>Gujarat</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Pincode</span>
                <span style={{ fontWeight: "700" }}>382007</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Category</span>
                <span style={{ fontWeight: "700" }}>Shoes</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Subcategory</span>
                <span style={{ fontWeight: "700" }}>Shoes</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Incubation Center</span>
                <span style={{ fontWeight: "700" }}>Ahmedabad</span>
              </p>
              <p style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ whiteSpace: "pre-line" }}>
                  Incubation Center
                  <br />
                  City
                </span>
                <span style={{ fontWeight: "700" }}>Ahmedabad</span>
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
              INQUIRY NOW
            </button>
          </div>
          <div className="main-div">
            <p>About us : </p>
            <p
              style={{
                fontWeight: "lighter",
                fontSize: "15px",
                lineHeight: "1.6",
                maxHeight: "10%",
                maxWidth: "900px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <SimilarProduct />
          </div>
        </div>
        <div className="award-container">
          <p
            style={{
              color: "black",
              fontFamily: "Poppins-SemiBold, Helvetica",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Awards
          </p>
          <Awards />
        </div>
        <div className="award-container">
          <p
            style={{
              paddingTop: "1%",
              color: "black",
              fontFamily: "Poppins-SemiBold, Helvetica",
              fontSize: "18px",
              fontWeight: "600",
            }}
          >
            Certificate
          </p>
          <Awards />
        </div>
        <Review />
      </Layout>
    </>
  );
};

export default AboutuPage;
